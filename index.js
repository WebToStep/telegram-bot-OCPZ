// Подключение dotenv для скрытия токена
require('dotenv').config()
// Телеграф для создания бота
const {
  Telegraf,
  Markup
} = require('telegraf')
// Подключить текстовые константы
const CONST = require('./modules/const')
// Подключить текст для бесплатных курсов
const texts = require('./modules/texts')

// Передать токен
const bot = new Telegraf(process.env.BOT_TOKEN)

// Старт бота
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : "незнакомец"}`+CONST.START_MSG, Markup.keyboard([
  ["Психологический тест"], 
  ["Контакты"], 
  ["Задать вопрос❓"]
]).resize()))
bot.command('location', (ctx) => ctx.sendLocation(ctx.message.message_id, '11.120310', '76.119350'));
          bot.command('location', (ctx) => ctx.sendLocation(ctx.message.message_id, ['11.120310', '76.119350']));
          bot.command('location', (ctx) => ctx.sendLocation(['11.120310', '76.119350']));
          bot.command('location', (ctx) => ctx.sendLocation('11.120310', '76.119350'));
// Помощь
bot.help(async (ctx) => {
  try {
    await ctx.replyWithHTML(CONST.COMMANDS, Markup.inlineKeyboard(
      [
        Markup.button.url('Контакты компании', 'https://ocpzaktobe.kz/contacts/'),
<<<<<<< HEAD
        Markup.button.callback('Как проехать?', 'btn_map')
=======
        Markup.button.callback('Как проехать?', 'btn_map'),
>>>>>>> 15b77dc587c83231a241cc439231d15f1f0d6073
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

// Кнопка "Пройти тест"
bot.hears('Психологический тест', async (ctx) => {
  try {
    await ctx.replyWithPhoto({
      source: 'img/Test.jpg'
    }, {
      caption: CONST.TEST,
      parse_mode: "HTML",
      reply_markup: JSON.stringify({"inline_keyboard": [
        [
          Markup.button.url('Новости', 'https://ocpzaktobe.kz/category/news/'),
          Markup.button.url('Статьи', 'https://ocpzaktobe.kz/category/zozh/'),
          Markup.button.url('Услуги', 'https://ocpzaktobe.kz/uslugi/')
        ]
      ]})
    }, {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})
// Кнопка "Контакты"
bot.hears('Контакты', async (ctx) => {
  try {
    await ctx.replyWithHTML(`
<<<<<<< HEAD
<b>Адрес: 
📌Актюбинская область, г. Актобе, 
жилой массив Жанаконыс, здание 4Б, 
почтовый индекс 📩030017 </b>
=======
<b>Адрес: Актюбинская область,
г. Актобе, жилой массив Жанаконыс, здание 4Б, 
почтовый индекс 030017 </b>
>>>>>>> 15b77dc587c83231a241cc439231d15f1f0d6073
`, Markup.inlineKeyboard([
      [Markup.button.callback('Как проехать?', 'btn_map')],
      [Markup.button.url('Показать адрес на сайте', 'https://ocpzaktobe.kz/contacts/')],
    ]))
<<<<<<< HEAD
=======
    // await ctx.reply(CONST.DONATION, Markup.inlineKeyboard(
    //   [
    //     Markup.button.url('Ссылка на любую платежную систему', 'https://kaspi.kz'),
    //     Markup.button.url('xxx', 'https://kaspi.kz'),
    //   ]
    // ))

>>>>>>> 15b77dc587c83231a241cc439231d15f1f0d6073
  } catch (e) {
    console.error(e)
  }
})
// Кнопка "Обратная связь"
bot.hears('Задать вопрос❓', async (ctx) => {
  try {
    await ctx.reply('🤔 Скоро вы сможете задать здесь свой вопрос', Markup.inlineKeyboard(
      [Markup.button.url('Задать вопрос на сайте', 'https://ocpzaktobe.kz/zadat-vopros/')]))
  } catch (e) {
    console.error(e)
  }
})


// обработка кнопки проехать \ карта
bot.action('btn_map', async (ctx) => {
  try {
    // вывод карты
    await ctx.answerCbQuery()
<<<<<<< HEAD
    await ctx.replyWithHTML(`
    <b>Нажмите на карту:
=======
    await ctx.replyWithHTML(`<b>Нажмите на карту:
>>>>>>> 15b77dc587c83231a241cc439231d15f1f0d6073
    для того чтобы проложить маршрут📍
    или посмотреть адрес🌍</b>`)
    await ctx.replyWithLocation('50.287692', '57.057018)') 

  } catch (e) {console.log(e)}
})
/**
 * Функция для отправки сообщения при нажатии по кнопке или выполнении команды
 * @param {String} id Идентификатор кнопки для обработки
 * @param {String} src Путь к изображению, или false чтобы отправить только текст
 * @param {String} text Текстовое сообщение для отправки
 * @param {Boolean} preview Блокировать превью у ссылок или нет, true - блокировать, false - нет
 */
function send_msg_action(id, src, text, keyboard=[[]], preview=false) {
  bot.action(id, async (ctx) => {
    try {
      await ctx.answerCbQuery()
      if (src) {
        await ctx.replyWithPhoto({
          source: src
        }, {
          caption: text,
          parse_mode: "HTML",
          reply_markup: JSON.stringify({"inline_keyboard": keyboard})
        });
      } else {
        await ctx.replyWithHTML(text, {
          disable_web_page_preview: !preview,
          reply_markup: JSON.stringify({"inline_keyboard": keyboard})
        })
      }
    } catch (e) {
      console.error(e)
    }
  })
}

// Команда //website - Бесплатные курсы
bot.command('/website', async (ctx) => {
  try {
    // await bot.sendLocation(msg.chat.id, 50.287692, 57.057018)
    await ctx.replyWithHTML('<b>Бесплатные курсы на <a href="https://www.youtube.com/c/ITDoctor/playlists">YouTube</a></b>', Markup.inlineKeyboard([
      [Markup.button.callback('Редакторы кода', 'btn_category1')]
    ]))
  } catch (e) {
    console.error(e)
  }
})

// Обработка кнопок из категории Редакторы кода
bot.action('btn_category1', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Редакторы кода</b>\n4 курса\n71 видео урок\n8 часов', Markup.inlineKeyboard([
      [
        Markup.button.callback('1. Обзоры', 'category1_btn1'),
        Markup.button.callback('2. VS Code', 'category1_btn2')
<<<<<<< HEAD
=======
      ]
    ]))
  } catch (e) {
    console.error(e)
  }
})
send_msg_action('category1_btn1', 'img/free_course/c1_b1.jpg', free_course[0][0], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIO74IrW8y6DohRKaL5o1N1F')]])
send_msg_action('category1_btn2', 'img/free_course/c1_b2.jpg', free_course[0][1], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIMzp2sMA9NSj4UX_pI-jECS')]])
send_msg_action('category1_btn3', 'img/free_course/c1_b3.jpg', free_course[0][2], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIM_rvF3ARKFYu7jAjuRrON6')]])
send_msg_action('category1_btn4', 'img/free_course/c1_b4.jpg', free_course[0][3], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINjpdYGtf2podRhv6DdrvKn')]])

// Обработка кнопок из категории Инструменты
bot.action('btn_category2', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Инструменты веб-разработчика</b>\n6 курсов\n75 видео уроков\n15 часов 50 минут', Markup.inlineKeyboard([
      [
        Markup.button.callback('1. Полезные сервисы', 'category2_btn1'),
        Markup.button.callback('2. Обзоры', 'category2_btn2')
      ],
      [
        Markup.button.callback('3. Open Server', 'category2_btn3'),
        Markup.button.callback('4. Photoshop', 'category2_btn4')
      ],
      [
        Markup.button.callback('5. Git & GitHub', 'category2_btn5'),
        Markup.button.callback('6. Сборщик Gulp 4', 'category2_btn6')
      ]
    ]))
  } catch (e) {
    console.error(e)
  }
})
send_msg_action('category2_btn1', 'img/free_course/c2_b1.jpg', free_course[1][0], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINwXopVMV34_gWKV0yESNwJ')]])
send_msg_action('category2_btn2', 'img/free_course/c2_b2.jpg', free_course[1][1], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIOq9sXC3Hnj8KrCsP1egO6T')]])
send_msg_action('category2_btn3', 'img/free_course/c2_b3.jpg', free_course[1][2], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINU_F29Ijq_MgeUwjrKaVqW')]])
send_msg_action('category2_btn4', 'img/free_course/c2_b4.jpg', free_course[1][3], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleINP2w4V37k8f5Jxp5j8ndfU')]])
send_msg_action('category2_btn5', 'img/free_course/c2_b5.jpg', free_course[1][4], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIOMB2R_Kky05ZfiAx2_pbAH')]])
send_msg_action('category2_btn6', 'img/free_course/c2_b6.jpg', free_course[1][5], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIM7fEgWkXJvfiVOd2ecZyEE')]])

// Обработка кнопок из категории Основы вёрстки HTML и CSS
bot.action('btn_category3', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Основы вёрстки HTML и CSS</b>\n5 курсов\n121 видео урок\n16 часов 30 минут', Markup.inlineKeyboard([
      [
        Markup.button.callback('1. HTML', 'category3_btn1'),
        Markup.button.callback('2. CSS', 'category3_btn2')
      ],
      [
        Markup.button.callback('3. Emmet', 'category3_btn3'),
        Markup.button.callback('4. Формы', 'category3_btn4')
      ],
      [
        Markup.button.callback('5. Препроцессоры SCSS, Less', 'category3_btn5')
>>>>>>> 15b77dc587c83231a241cc439231d15f1f0d6073
      ]
    ]))
  } catch (e) {
    console.error(e)
  }
})
send_msg_action('category1_btn1', 'img/texts/c1_b1.jpg', texts[0][0], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIO74IrW8y6DohRKaL5o1N1F')]])
send_msg_action('category1_btn2', 'img/texts/c1_b2.jpg', texts[0][1], [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIMzp2sMA9NSj4UX_pI-jECS')]])


// Команда об авторе бота
bot.command('/master', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/autor.jpg' });

    await ctx.replyWithHTML(`
    <b>Автор бота Мухамеджанов Хасан
    сотрудник ОЦПЗ Актобе и основатель 
    проекта webstep.kz</b>
    `, Markup.inlineKeyboard([
      [Markup.button.url('На сайт разработчика', 'webstep.kz')]
    ]))
    

  } catch (e) {
    console.error(e)
  }
})

// Запустить бота
bot.launch()

// Для удобства в консоле
console.log("Бот запущен")

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))