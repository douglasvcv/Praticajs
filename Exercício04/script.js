function tabuada(){
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  let res = document.querySelector('div#res')
 if(num.value.length == 0){
  window.alert('ERRO! Por favor, digite um número.')
 }else{
  let n = Number(num.value)
  tab.innerHTML = ''
  for(let nt = 1; nt <= 10; nt++){
    let item = document.createElement('option')
    item.text = `${n} x ${nt} = ${n*nt}`
    tab.appendChild(item)
  }
 }
}