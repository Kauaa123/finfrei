import prompt from 'prompt-sync'
let ler = prompt()

export function mensagem(msg) {
    console.log(msg)
}

export function depositar(saldo) {
    while (true) {
    mensagem('Quanto você quer depositar?')
    let deposito = Number(ler())

    if (deposito === 0) {
        mensagem('Insira um número positivo.')
        continue
    }

    else if (deposito < 0) {
        mensagem('Operação cancelada.')
        return saldo
    }
    else if (deposito > 0) {
        saldo += deposito 
        return saldo
    }
    }
}


export function sacar(saldo) {
    while (true) {
    mensagem('Quanto você quer sacar?')
    let saco = Number(ler())

    if (saco === 0 ) {
        mensagem('Insira um número positivo.')
        continue
    }
    else if (saco > saldo) {
        mensagem('Saldo insuficiente')
    }

    else if (saco < 0) {
        mensagem('Operação cancelada.')
        return saldo
    }
    else if (saco > 0 && saldo > saco) {
        saldo -= saco
        return saldo
    }
    }
}

export function simulador(saldo) {
    while (true) {

    mensagem('Qual o juros?')
    let juros = Number(ler())

    if (juros === 0) {
        mensagem('Insira um número positivo.')
        continue
    }

    mensagem('Qual o Tempo investido')
    let tempo = Number(ler())

    if (tempo === 0) {
        mensagem('Não pode ser número negativo.')
        continue
    }

    mensagem('Qual a Capital inicial')
    let capital = Number(ler())

    if (capital === 0) {
        mensagem('Não pode ser número negativo.')
        continue
    }
    
    
    if (juros < 0 || tempo < 0 || capital < 0) {
        mensagem('Operação cancelada.')
        return saldo
    }

    else if (juros > 0 && tempo > 0 && capital > 0){
        saldo += capital * (1 + juros / 100) ** tempo 
        return saldo

    }
    }
    
}

export function exibirsaldo(saldo) {
    mensagem(`O seu saldo atual é ${saldo.toFixed(0)}`)
}   