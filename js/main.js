let hora = new Date();
document.write(hora.getHours()+":") 
document.write(hora.getMinutes())
document.write()


function chequeo(){

if (hora.getHours()<21) {
   window.location="file:///C:/Users/marce/OneDrive/Escritorio/Pillow/pages/menuInicio.html"
} else {
    alert('no')
}}

let bot =document.getElementById(btn)
bot.addEventListener('click',chequeo)