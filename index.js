const p = document.getElementById('p')
navigator.geolocation.getCurrentPosition(
  (pos) => {
    console.log(pos.coords.latitude, pos.coords.longitude);
    p.textContent = `${pos.coords.latitude}, ${pos.coords.longitude}`
  },
  (err) => {
    console.log("Пользователь отказал", err);
    p.textContent = 'no'
  }
);
//navigator.geolocation.getCurrentPosition(
    //(pos) => {
   // console.log(pos.coords.latitude, pos.coords.longitude);
  //},
  //(err) => {
   // console.log("Пользователь отказал", err);
 // }
//)