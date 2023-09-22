let horasnow = new Date();
let h = horasnow.getHours();
let texto = document.querySelector('div#txt');
let imagem = document.querySelector('img#img');
let bons = document.querySelector('p#bons');
let body = document.querySelector('body');
texto.innerHTML = `Agora são ${h} horas`
if(h >= 5 && h < 12){
  imagem.setAttribute('src', 'imagens/manha.webp')
  bons.innerHTML = `Bom dia!`
  body.style.background = 'yellow'
}if(h >= 12 && h < 18){
  imagem.setAttribute('src', 'imagens/tarde.webp')
  bons.innerHTML = `Boa tarde!`
  body.style.background = 'orange'
}if(h >= 18 && h < 24){
  imagem.setAttribute("src", "imagens/noite.webp")
  bons.innerHTML = `Boa noite!`
  body.style.background = "rgb(30, 39, 89)"
}if(h >= 0 && h < 5){
  imagem.setAttribute("src", "imagens/madrugada.webp")
  bons.innerHTML = `Boa madrugada!`
  body.style.background = 'black'
}
  
