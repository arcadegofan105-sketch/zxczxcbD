require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

const REF_URL = 'https://play.mori.win/referral/MNCHPMHI';
const SUPPORT_URL = 'https://t.me/moriwinhelpbot';
const COMMUNITY_URL = 'https://t.me/moricoin_official';

bot.start(async (ctx) => {
  // Кнопка слева от поля ввода (menu button) -> Mini App
  await ctx.telegram.callApi('setChatMenuButton', {
    chat_id: ctx.chat.id,
    menu_button: {
      type: 'web_app',
      text: 'Open',
      web_app: { url: REF_URL },
    },
  }); // setChatMenuButton — метод Bot API [web:19]

  const text =
    '<b>Спасибо, что присоединились к нам в проект!</b>\n' +
    'Нажми кнопку ниже, чтобы открыть приложение или перейти в разделы.';

  await ctx.reply(text, {
    parse_mode: 'HTML',
    ...Markup.inlineKeyboard([
      [Markup.button.webApp('Открыть', REF_URL)],
      [Markup.button.url('Поддержка', SUPPORT_URL)],
      [Markup.button.url('Сообщество', COMMUNITY_URL)],
    ]),
  });
});

bot.launch();
