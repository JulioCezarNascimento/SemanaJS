// Função de saída
console.log("Olá, mundo!");

// Função de entrada
let nome = prompt("Qual é o seu nome?");
console.log("Olá, " + nome + "!");

// Função de cálculo
const numero1 = 10;
const numero2 = 5;
const soma = numero1 + numero2;
console.log("A soma de " + numero1 + " e " + numero2 + " é igual a " + soma + ".");

// Função condicional
if (soma > 10) {
  console.log("O resultado é maior que 10.");
} else {
  console.log("O resultado é menor ou igual a 10.");
}

// Função de repetição
for (let i = 0; i < 5; i++) {
  console.log("O valor de i é: " + i);
}

// Função de array
const frutas = ["maçã", "banana", "laranja"];
console.log("A segunda fruta é: " + frutas[1]);

// Função de objeto
const pessoa = {
  nome: "João",
  idade: 25,
  profissao: "Engenheiro"
};
console.log(pessoa.nome + " tem " + pessoa.idade + " anos e é " + pessoa.profissao + ".");

// Função de callback
function somar(a, b, callback) {
  const resultado = a + b;
  callback(resultado);
}

function exibirResultado(res) {
  console.log("O resultado da soma é: " + res);
}

somar(3, 4, exibirResultado);
