let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true; // O número está no intervalo de 1 a 100
    } else {
        return false; // O número não está no intervalo de 1 a 100
    }
}


function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (!isNum(num.value)) {
        window.alert('Número inválido. Digite um número entre 1 e 100.');
    } else if (inLista(num.value, valores)) {
        window.alert('Número já encontrado na lista.');
    } else {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = ''
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)

        let soma = 0
        for (let c = 0; c < valores.length; c += 1)
        soma += valores[c];  

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior Valor que temos na lista é ${maior}</p>`
        res.innerHTML += `<p>O menor Valor que temos na lista é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores que temos na lista é ${soma}</p>`
        res.innerHTML += `<p>A media dos valores que temos na lista é ${soma / valores.length}</p>`
    }
}