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
        mensagem('Quanto você quer depositar?')
        deposito = Number(ler())
    }

    else if (deposito < 0) {
        mensagem('Operação cancelada.')
        return saldo
    }
    else if (deposito > 0) {
        let total = deposito + saldo
        return total
    }
    }
}


export function sacar(saldo) {
    while (true) {
    mensagem('Quanto você quer sacar?')
    let saco = Number(ler())

    if (saco === 0 ) {
        mensagem('Quanto você quer sacar?')
        saco = Number(ler())
    }
    else if (saco > saldo) {
        mensagem('Saldo insuficiente')
    }

    else if (saco < 0) {
        mensagem('Operação cancelada.')
        return saldo
    }
    else if (saco > 0 && saldo > saco) {
        let total = saldo - saco
        return total
    }
    }
}

export function exibirsaldo(saldo) {
    mensagem(`O seu saldo atual é ${saldo}`)
}