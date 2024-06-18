import prompt from 'prompt-sync'
let ler = prompt()

import { depositar, exibirsaldo, sacar, mensagem } from './func.js'

let saldo = 0

    while (true) {
    console.log(
    `    1- depositar
    2 - sacar
    3 - exibir o saldo
    4- sair`)
    let es = Number(ler())

    if (es === 1) {
        saldo = depositar(saldo)
        console.log(`Novo saldo: ${saldo}`)
    } 
    else if (es === 2) {
        saldo = sacar(saldo)
        console.log(`Novo saldo: ${saldo}`)
    } 
    else if (es === 3) {
        console.clear()
        saldo = exibirsaldo(saldo)
    } 
    else if (es === 4) { 
        break
    }
    else {
        console.log("Opção inválida. Tente novamente.");
    }
}