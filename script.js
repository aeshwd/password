let input = document.querySelector("#text");
let btn = document.querySelector(".generate");
let copy = document.querySelector(".copy");

btn.addEventListener("click", ()  => {
   let numbers = "0123456789";
   let letters = "abcdefghijklmnopqrstuvwxyz";
   let symbols = "@#$&^";
   let allChar = numbers + letters + letters.toUpperCase() + symbols;
   let password = "";
   
   for(let i = 0; i < 8; i++){
    password += allChar[Math.floor(Math.random() * 41)];

   }

   input.value = password;
   
});

copy.addEventListener("click", () => {
    input.select();
    document.execCommand('copy');
    alert("Password is copied to clipboard");
});