require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '✅ Le bot fonctionne en mode background sur Render !');
});

// TEMP : Affiche le chat_id dans les logs
bot.on('message', (msg) => {
  console.log("📥 Nouveau message reçu !");
  console.log("Chat ID :", msg.chat.id);
});
