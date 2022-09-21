// Funções Fabrica - Factory Functions
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    fala(assunto) {
      return `${this.nome} está falando sobre ${assunto}`;
    },
    altura: a,
    peso: p,
    imc() {
     const indice = this.peso / (this.altura ** this.altura);
     return indice.toFixed(2); 
    }
  };
}

const p1 = criaPessoa('José', 'Roberto', 1.8, 80);
console.log(p1.imc());
const p2 = criaPessoa('Maria', 'Antonieta', 1.6, 58);
console.log(p2.fala('JS'));
console.log(p2.imc());