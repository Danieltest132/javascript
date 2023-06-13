function tabuada(){
    let numb = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(numb.value.length == 0){
        window.alert('[ERRO] Impossível gerar tabuada')
    }else {
        let f = Number(numb.value)
        p = 1 
        tab.innerHTML = ''
        while(p <= 10){
            let item = document.createElement('option')
            item.text = `${f} X ${p} = ${f*p}`
            item.value = `tab${f}`
            tab.appendChild(item)
            p++
        }
    }
}