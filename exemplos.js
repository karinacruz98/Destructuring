//Agregacao de arrays
const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

//Sem destructuring
const numero = [numerosPares, numerosImpares];

//Com destructuring
const numeroD = [...numerosPares, ...numerosImpares];

console.log("Sem destructuring: ", numero);
console.log("Com destructuring", numeroD);
console.log("=================================");

//Atribuicao de valores em arrays
//Sem destructuring
const [num1, num2, outrosNumeros] = [1, 2, 3, 4, 5];
//Com destructuring
const [num1D, num2D, ...outrosNumerosD] = [1, 2, 3, 4, 5];

console.log("Sem destructuring: ",num1, num2, outrosNumeros);
console.log("Com destructuring: ",num1D, num2D, outrosNumerosD);
console.log("=================================");

//Agregacao de valores em objetos
const pessoa = {
    nome: 'Karina',
    idade: 22
}
const pessoaComCPF = {
    pessoa,
    cpf: 44455566677
}
const pessoaComCPFD = {
    ...pessoa,
    cpf: 44455566677
}
console.log("Sem destructuring: ", pessoaComCPF);
console.log("Com destructuring: ", pessoaComCPFD);
console.log("=================================");

//Valores por default
const [nome = 'nao preenchido'] = [];
console.log(nome);
console.log("=================================");

//Filtro no recebimento de function
function imprimeDados({ nome, cpf }){
    console.log(nome, cpf);
}

imprimeDados(pessoaComCPFD);