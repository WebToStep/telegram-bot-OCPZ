const { Telegraf } = require('telegraf');
require('dotenv').config();
const text = require('./const');

const bot = new Telegraf(process.env.BOT_TOKEN)
// Ответить сообщением
// bot.start((ctx) => ctx.reply('Welcome'))
// получение массива данных юзера
// bot.start((ctx) => console.log(ctx.message))
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'User'}`))
bot.help((ctx) => ctx.reply(text.commands))

// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))

// https://www.youtube.com/watch?v=YxHWfDdjIek&ab_channel=ITDoctor 29:52

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))