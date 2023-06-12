function contar() {
    let start = document.getElementById('start')
    let step = document.getElementById('step')
    let end = document.getElementById('end')
    let res = document.getElementById('res')
    
    if (start.value.length == 0 || step.value.length == 0 || end.value.length == 0){
        res.innerHTML = 'Impossível contar'
    }else {
        res.innerHTML = 'Contando: '
        let s = Number(start.value)
        let st = Number(step.value)
        let e = Number(end.value)
        if (st <= 0) {
            window.alert('Passo inválido, considerando PASSO 1')
            st = 1
        }
        if (s < e){
        for (c = s; c <= e; c += st){
            res.innerHTML += `${c} \u{1F449}`
            }
        }else {
        for (let c = s; c >= e; c -= st)
        res.innerHTML += `${c} \u{1F449}`
    }
    res.innerHTML += `\u{1F3C1}`
    
    }
}