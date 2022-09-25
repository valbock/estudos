function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
      this.cliqueBotoes();
      this.pressionaEnter();
    };

    this.cliqueBotoes = () => {
      document.addEventListener('click', (evento) => {
        const elemento = evento.target;
        if (elemento.classList.contains('btn-num')) this.btnParaDisplay(elemento.innerText);
        if (elemento.classList.contains('btn-clear')) this.clearDisplay();
        if (elemento.classList.contains('btn-del')) this.apagaUm();
        if (elemento.classList.contains('btn-eq')) {
          this.realizaConta();
          this.display.focus();
        }
      });
    };

    this.btnParaDisplay = (valor) => {
      this.display.value += valor;
      this.display.focus();
    };

    this.pressionaEnter = () => {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    };

    this.clearDisplay = () => this.display.value = '';

    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
      let conta = this.display.value;
      try {
        conta = eval(conta);
        if (!conta) {
          alert('Conta inválida');
          return
        }
        this.display.value = conta;
      } catch(e) {
        alert('Conta inválida');
      }
    };
  }
const calculadora = new Calculadora();
calculadora.inicia();
