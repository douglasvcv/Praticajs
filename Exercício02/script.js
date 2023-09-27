function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value == 0 || fano.value > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente')
  }else{
    var msex = document.getElementById('mas')
    var fsex = document.getElementById('fem')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.querySelector('img#img')
    
    if(msex.checked){
      if(idade >= 0 && idade < 12){
        img.setAttribute("src", "imagem/criançahomem.webp")
        genero = 'Criança'
      }else if(idade < 20){
        img.setAttribute("src", "imagem/jovemhomem.webp")
        genero = 'Jovem'
      }else if(idade <50){
        img.setAttribute("src", "imagem/adultohomem.jpg")
        genero = 'Homem'
      }else if(idade < 100){
        img.setAttribute("src", "imagem/idosohomem.jpg")
        genero = 'Idoso'
      }else if(idade > 120){
        window.alert("[ERRO] Verifique os dados e tente novamente")
      }
    }else if (fsex.checked){
      
      if (idade >= 0 && idade < 12) {
        img.setAttribute("src", "imagem/criançamulher.jpg")
        genero = "Criança"
      } else if (idade < 20) {
        img.setAttribute("src", "imagem/jovemmulher.avif")
        genero = "Jovem"
      } else if (idade < 50) {
        img.setAttribute("src", "imagem/adultomulher.avif")
        genero = "Mulher"
      } else if (idade < 100) {
        img.setAttribute("src", "imagem/idosomulher.jfif")
        genero = "Idosa"
      } else if (idade > 120) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
  }
}