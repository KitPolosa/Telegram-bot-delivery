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
import json
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

@dp.callback_query(lambda c: c.data == 'clear_cart')
async def clear_cart_callback(query: types.CallbackQuery):
    global cart
    cart = {}
    await query.answer("Корзина очищена.")
    await query.message.delete()

@dp.message(F.text == 'text')
async def handle_data(message: types.Message):
    data = json.loads(message.text)
    if "items" in data:
        for item_data in data["items"]:
            item_id = item_data["id"]
            quantity = item_data["quantity"]
            cart[item_id] = quantity
        await message.answer("Товары добавлены в корзину.")
    elif "clear_cart" in data and data["clear_cart"]:
        cart.clear()
        await message.answer("Корзина очищена.")

@dp.message(Command("show_cart"))
async def show_cart(message: types.Message):
    if not cart:
        await message.answer("Корзина пуста.")
    else:
        cart_text = "Содержимое вашей корзины:\n"
        total_price = 0
        for item_id, quantity in cart.items():
            item_name = datas.items[item_id]["name"]
            item_price = datas.items[item_id]["price"]
            total_price += item_price * quantity
            cart_text += f"{item_name}: {quantity} шт.\n"
        cart_text += f"Общая стоимость: {total_price} ₽"
        await message.answer(cart_text)

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