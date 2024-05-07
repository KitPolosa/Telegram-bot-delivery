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
from aiogram.enums import ParseMode
from aiohttp import web

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
async def handle_post(request):
    data = await request.json()
    items = data.get('items', [])
    total_price = data.get('totalPrice', 0)

    for item in items:
        item_id = item['id']
        name = item['name']
        quantity = item['quantity']
        price = item['price']

        if item_id in cart:
            cart[item_id]['quantity'] += quantity
        else:
            cart[item_id] = {'name': name, 'quantity': quantity, 'price': price}

    return web.Response(text=f"Added items to cart. Total price: {total_price}")


async def clear_cart(message: types.Message):
    global cart
    cart = {}
    await message.answer("Корзина очищена.")


# Обработка команды для очистки корзины
@dp.message(Command("clear_cart"))
async def clear_cart_command(message: types.Message):
    await clear_cart(message)


# Обработка команды для показа корзины
@dp.message(Command("show_cart"))
async def show_cart_command(message: types.Message):
    if not cart:
        await message.answer("Ваша корзина пуста.")
    else:
        cart_text = "<b>Корзина:</b>\n"
        total_price = 0
        for item_id, item_data in cart.items():
            name = item_data['name']
            quantity = item_data['quantity']
            price = item_data['price']
            total_price += quantity * price
            cart_text += f"{name}: {quantity} шт. - {quantity * price} ₽\n"
        cart_text += f"<b>Общая цена:</b> {total_price} ₽"
        await message.answer(cart_text, parse_mode=ParseMode.HTML)


# Настройка веб-приложения для обработки POST запросов
app = web.Application()
app.add_routes([web.post('/add_to_cart', handle_post)])

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