from aiogram import Bot, Dispatcher, F
import asyncio
from dotenv import load_dotenv
import os
import json
from utilits.commands import set_commands
from handlers.start import get_start
from state.register import RegisterState
from handlers.register import start_register, register_name, register_phone, register_address
from aiogram.filters import Command
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, WebAppInfo
from keyboards.categories import categories_kb
from keyboards.profile_kb import profile_kb
from aiogram import types
import datas

load_dotenv()

token = os.getenv('TOKEN')
admin_id = os.getenv('ADMIN_ID')

bot = Bot(token=token, parse_mode='HTML')
dp = Dispatcher()

web_app = WebAppInfo(url='https://kitpolosa.github.io/')

async def start_bot(bot: Bot):
    await bot.send_message(admin_id, text='Здарова заебал')

dp.startup.register(start_bot)
dp.message.register(get_start, Command(commands='start'))

@dp.message(F.text == 'Каталог')
async def process_catalog_button_click(message: types.Message):
    await message.answer("Выберите категорию:", reply_markup=categories_kb)

@dp.message(F.text == 'Вернуться в главное меню')
async def process_catalog_button_click(message: types.Message):
    await message.answer("Выберите одно из действий:", reply_markup=profile_kb)

cart = {}

@dp.message()
async def web_app(callback_query):
    json_data = callback_query.web_app_data.data
    parsed_data = json.loads(json_data)
    message = ""
    for item in parsed_data['items']:
        product_name = item['name']
        price = item['price']
        message += f"Продукт: {product_name}\n"
        message += f"Стоимость: {price}\n\n"

    message += f"Общая стоимость: {parsed_data['totalPrice']}"

    # Добавляем информацию о товарах в корзине
    for item in parsed_data['items']:
        product_name = item['name']
        quantity = item['quantity']
        cart[product_name] = quantity

    await bot.send_message(callback_query.from_user.id, f"""
{message}
""")

    await bot.send_message('5275057849', f"""
Новый заказ ✅

{message}
""")

@dp.callback_query(lambda query: query.data.startswith('remove_from_cart'))
async def remove_from_cart(callback_query):
    product_name = callback_query.data.split(':')[1]
    if product_name in cart:
        del cart[product_name]
        await bot.answer_callback_query(callback_query.id, text=f"Товар '{product_name}' удален из корзины.")
    else:
        await bot.answer_callback_query(callback_query.id, text=f"Товар '{product_name}' не найден в корзине.")

#Регистрируем хендлеры регистрации
dp.message.register(start_register, F.text=='Зарегистрироваться')
dp.message.register(register_name, RegisterState.regName)
dp.message.register(register_phone, RegisterState.regPhone)
dp.message.register(register_address, RegisterState.regAddress)



async def start():
    await set_commands(bot)
    try:
        await dp.start_polling(bot, skip_updates=True)
    finally:
        await bot.session.close()

if __name__ == '__main__':
    asyncio.run(start())