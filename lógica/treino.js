var prompt = require ("prompt-sync")()

var limitTransferencia = 10000

var saldoConta = Number(prompt("Qual o seu saldo bancario: "))

var saldoContaTran = 5000

var valorTransferencia = Number(prompt("Valor para transferencia: "))

var saldoAtual = saldoConta - valorTransferencia

var SaldoAtualTran = saldoContaTran + valorTransferencia

if(valorTransferencia > 10000){
  console.log(`Valor não permitido`)
}else{
  console.log(`Transferencia efetuada com sucesso.`)
  console.log(`Saldo atual da conta: ${saldoAtual}`)
  console.log(`------------------------------------------------------------------`)
  console.log(`Saldo atual da conta A: ${SaldoAtualTran}`)
}
