function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var ano = Number(formAno.value)
    var idade = anoAtual - ano
    var res = document.querySelector('div#res')
    var sex = document.getElementsByName('sexradio')
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.style.margin ='50px'
    if (ano.length == 0 || ano > anoAtual || ano < 1900){
        window.alert('[ERROR] Invalid input, check the data again')
    }else {
        if(sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10){
                //CRIANÇA 
                img.setAttribute('src', 'img/homem_crianca.png')
            }else if (idade <= 25){
                //JOVEM
                img.setAttribute('src', 'img/homem_jovem.png')
            }else if (idade < 60){
                //ADULTO
                img.setAttribute('src', 'img/homem_adulto.png')
            }else {
                //IDOSO
                img.setAttribute('src', 'img/homem_idoso.png')
            }
        }else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                //CRIANÇA
                img.setAttribute('src', 'img/mulher_crianca.png')
            }else if (idade <= 25){
                //JOVEM
                img.setAttribute('src', 'img/mulher_jovem.png')
            }else if (idade < 60){
                //ADULTO
                img.setAttribute('src', 'img/mulher_adulta.png')
            }else {
                //IDOSO
                img.setAttribute('src', 'img/mulher_idosa.png')
            }
        }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    }
}