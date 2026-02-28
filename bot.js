require('dotenv').config()
const { Telegraf, Markup } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

const REF_URL = 'https://play.mori.win/referral/MNCHPMHI'
const SUPPORT_URL = 'https://t.me/moriwinhelpbot'
const COMMUNITY_URL = 'https://t.me/moricoin_official'

bot.start(async ctx => {
	await ctx.reply(
		'Спасибо, что присоединились к нам в проект!',
		Markup.keyboard([[Markup.button.webApp('Открыть приложение', REF_URL)]])
			.resize()
			.persistent(),
	)

	await ctx.reply(
		'Ссылки:',
		Markup.inlineKeyboard([
			[Markup.button.url('Поддержка', SUPPORT_URL)],
			[Markup.button.url('Сообщество', COMMUNITY_URL)],
		]),
	)
})

bot.launch()
