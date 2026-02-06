const TelegramBot = require("node-telegram-bot-api");

const tgBotApi = '7845228825:AAGHu-y1on7AfOpvQJlPDTWSldBuQrKQE6k'

const bot = new TelegramBot(tgBotApi, {polling:true})

bot.on('message', (msg)=>{
    const  userid = msg.chat.id
    console.log(userid);
    bot.sendMessage(userid, 'rfy')
      if (msg.location) {
    console.log(msg.location.latitude, msg.location.longitude);
  }else{
    console.log('no location');
    
  }
})

// const restartBot = bot.onText(/\/restart/, (msg) => {
//   const chatId = msg.chat.id;

//   bot.sendMessage(chatId, "🔄 Бот перезапускается...")
//     .then(() => {
//       process.exit(0);
//     });
// });

// bot.on("message", (msg) => {
//   const chatId = msg.chat.id;
//   const textTg = msg.text;
//      const ip =
//     msg.from?.ip_address || "IP скрыт Telegram";

//   bot.sendMessage(
//     msg.chat.id,
//     `Твой IP: ${ip}`
//   );
//   if (!textTg) return;

//   switch (textTg) {
//     case "/start":
//       bot.sendMessage(chatId, "привет");
//       break;

//     case "restart":
//       bot.sendMessage(chatId, "🔄 Бот закончил свою работу...")
//         .then(() => process.exit(0));
//       break;

//     default:
//       console.log(`вот ${textTg}`);
//       console.log(chatId);
//   }
// });
//  const ip =
//     msg.from?.ip_address || "IP скрыт Telegram";

//   bot.sendMessage(
//     msg.chat.id,
//     `Твой IP: ${ip}`
//   );

//api
// const express = require("express");
// const app = express();

// app.set("trust proxy", true); // ВАЖНО

// app.get("/api/ip", (req, res) => {
//   const ip = req.ip;
//   console.log("IP пользователя:", ip);
//   res.json({ ip });
// });

// app.listen(3001, () => {
//   console.log("Server running on port 3001");
// });



// import { useEffect, useState } from "react";

// function App() {
//   const [ip, setIp] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:3001/api/ip")
//       .then(res => res.json())
//       .then(data => setIp(data.ip));
//   }, []);

//   return (
//     <div>
//       <h1>Ваш IP адрес:</h1>
//       <p>{ip}</p>
//     </div>
//   );
// }

// export default App;


// navigator.geolocation.getCurrentPosition(
//   (pos) => {
//     console.log(pos.coords.latitude, pos.coords.longitude);
//   },
//   (err) => {
//     console.log("Пользователь отказал", err);
//   }
// );
// navigator.geolocation.getCurrentPosition(
//     (pos) => {
//     console.log(pos.coords.latitude, pos.coords.longitude);
//   },
//   (err) => {
//     console.log("Пользователь отказал", err);
//   }
// )
// console.log('hello');

