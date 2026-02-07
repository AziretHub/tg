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