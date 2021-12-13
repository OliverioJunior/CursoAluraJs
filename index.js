/* const cliente1Nome = "Ricardo";
const cliente1CPF = 1122233309;
const cliente1Agencia = 1001;
const cliente1Saldo = 0;

const cliente2Nome = "Alice";
const cliente2CPF = 88822233309;
const cliente2Agencia = 1001;
const cliente2Saldo = 0;

console.log(cliente1Nome) 
 */
/* class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();
 cliente1.nome = "Ricardo";
 cliente1.cpf = 1122233309;
 cliente1.agencia = 1001;
 cliente1.saldo = 0;

 cliente2.nome = "Alice";
 cliente2.cpf = 1122233309;
 cliente2.agencia = 1001;
 cliente2.saldo = 0;

 console.log(cliente1,cliente2) */

class Cliente{
    nome;
    cpf;
    
}

class ContaCorrente {
    agencia;
    saldo;
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            return valor;
        }
    };
    depositar(valor){
        if(valor<0) return;
        this.saldo += valor;
        
    }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();
 cliente1.nome = "Ricardo";
 cliente1.cpf = 1122233309;
 cliente1.agencia = 1001;
 cliente1.saldo = 0;

 cliente2.nome = "Alice";
 cliente2.cpf = 1122233309;
 cliente2.agencia = 1001;
 cliente2.saldo = 0;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.depositar(100)
console.log(contaCorrenteRicardo.saldo);
 
 const valorSacado = contaCorrenteRicardo.sacar(50)
 console.log(valorSacado);


 console.log(cliente1,cliente2)
