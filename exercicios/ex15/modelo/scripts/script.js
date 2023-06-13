function contar() {
    let start = document.getElementById('start')
    let end = document.getElementById('end')
    let step = document.getElementById('step')
    let res = document.querySelector('div#res')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        window.alert('[ERRO] Impossível de ler, tente novamente')
        res.innerHTML = 'Impossível contar...'
    }else {
        res.innerHTML = 'Contando: '
        let s = Number(start.value)
        let e = Number(end.value)
        let st = Number(step.value)
        
        if(st <= 0){
            window.alert('Passo inválido, considerando passo = 1')
            st = 1
        }

        if (s < e){
            for (c = s; c <= e; c += st){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else if (s > e) {
            for (c = s; c >= e; c -= st){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`

    }
}