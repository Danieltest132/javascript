function carregar (){
    var msg = document.getElementById('msg')
    var date = new Date()
    var hora = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()
    var img = document.getElementById('imagem')
    
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `Bom dia, a hora atual é ${hora}:${min} horas`
        img.setAttribute('src', 'img/manha.png')
        document.body.style.background = '#e1d6d4'
    }else if(hora <= 18) {
        msg.innerHTML = `Boa tarde, a hora atual é ${hora}:${min} horas`
        img.setAttribute('src', 'img/tarde.png')
        document.body.style.backgroundColor = '#ffb858'
    }else {
        msg.innerHTML = `Boa noite, a hora atual é ${hora}:${min} horas`
        img.setAttribute('src', 'img/noite.png')
        document.body.style.backgroundColor = '#000723'
    }
}