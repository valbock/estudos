/*
resultado:
Valtenir Bockhorny tem 56 anos, pesa 115 kg
tem 1.85 de altura e seu IMC é de 33,601168
Valtenir Bockhorny nasceu em 1965
*/
const nome = 'Valtenir';
const sobrenome = 'Bockhorny';
const idade = 57;
const peso = 115;
const alturaEmM = 1.85;
let imc; //peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade

console.log(nome, sobrenome,'tem',idade,'anos, pesa',peso,'Kg.'); 
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
