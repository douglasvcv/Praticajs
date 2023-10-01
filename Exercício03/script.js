function contar(){
var inicio = document.querySelector('input#txti')
var fim = document.querySelector('input#txtf')
var passo = document.querySelector('input#txtp')
var res = document.querySelector('div#res')
if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
  window.alert('ERRO!')
}else{ 
var ini = Number(inicio.value)
var f = Number(fim.value)
var pass = Number(passo.value)
 for(let i = ini; i <= f; i += pass){
  res.innerHTML += `\u{1F449} ${i} `
 }
 for(let i = ini; i >= f; i -= pass){
  res.innerHTML += `\u{1F449} ${i} `
 }

 }
}

