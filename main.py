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

@dp.message()
async def handle_webapp_data(message: types.Message):
    try:
        data = json.loads(message.text)
        items = data.get('items', [])
        total_price = data.get('totalPrice', 0)

        response = "Товары в корзине:\n"
        for item in items:
            name = item.get('name', 'Unknown')
            quantity = item.get('quantity', 0)
            response += f"{name}: {quantity} шт.\n"
            # Добавляем товар в корзину
            cart[name] = quantity

        response += f"Общая цена: {total_price} руб."
        await message.answer(response)
    except Exception as e:
        await message.answer(f"Произошла ошибка: {e}")

# Обработка команды /clearcart для очистки корзины
@dp.message(Command('clearcart'))
async def clear_cart(message: types.Message):
    global cart
    cart = {}
    await bot.send_message(message.chat.id, "Корзина очищена.")

# Обработка команды /viewcart для просмотра корзины
@dp.message(Command('viewcart'))
async def view_cart(message: types.Message):
    if cart:
        response = "Товары в корзине:\n"
        for item, quantity in cart.items():
            response += f"{item}: {quantity} шт.\n"
            await message.answer(response)
    else:
        await message.answer("Корзина пуста.")

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