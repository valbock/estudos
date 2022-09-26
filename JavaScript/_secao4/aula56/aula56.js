// Funções Fabrica - Factory Functions
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    //Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },


    fala(assunto = 'NADA') {
      return `${this.nome} está falando sobre ${assunto}`;
    },
    altura: a,
    peso: p,
    //Getter
    get imc() {
     const indice = this.peso / (this.altura ** this.altura);
     return indice.toFixed(2); 
    }
  };
}

const p1 = criaPessoa('José', 'Roberto', 1.8, 80);
console.log(p1.imc);
console.log(p1.nomeCompleto);
const p2 = criaPessoa('Maria', 'Antonieta', 1.6, 58);
console.log(p2.fala('JS'));
console.log(p2.imc);
console.log(p2.nomeCompleto);

p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto);


