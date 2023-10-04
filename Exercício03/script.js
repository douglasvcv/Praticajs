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
 
  res.innerHTML = `Contando: `

if(pass == 0){
  
  window.alert("Erro! Passo será igual a 1")
  pass = 1
}
if(ini < f){
  for(let i = ini; i <= f; i += pass){
    res.innerHTML += `| ${i} `
  }
    
}else{
    for(let i = ini; i >= f; i -= pass){
      res.innerHTML += `| ${i} `
  }

  }
  res.innerHTML += `|`
    }
      }