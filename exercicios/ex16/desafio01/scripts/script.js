let num = document.querySelector('input#num')
let list = document.querySelector('select#console')
let res = document.querySelector('div#res')
let numLi = []
function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}
function inList(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}
function adicionar(){
    if (isNumero(Number(num.value)) && !inList(num.value, numLi)){
        numLi.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `${num.value} adicionado`
        list.appendChild(item)
        
    }else {
        window.alert('Número inválido ou Já encontrado')
    }
    num.value = ''
    num.focus()
}
function verificar(){
    if (numLi.length == 0){
        window.alert('Adicione números para verificar')
    }else {
        let tot = numLi.length
        let maior = numLi[0]
        let menor = numLi[0]
        let media = 0
        let soma = 0 

        for (pos in numLi){
            soma += numLi[pos]
            if (numLi[pos] > maior){
                maior = numLi[pos]
            }
            if(numLi[pos] < menor){
                menor = numLi[pos]
            }
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} número(s) cadastrados</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>somando todos os valores temos: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é: ${media}</p>`
    }
}


