function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;

  switch(diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = 'Segunda';
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = 'Terça';
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = 'Quarta';
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = 'Quinta';
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = 'Sexta';
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = 'Sábado';
      return diaSemanaTexto;
    default:
      diaSemanaTexto = '';
      return diaSemanaTexto;
  }
}

const data = new Date('2022-09-15 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);

// switch(diaSemana) {
//   case 0:
//     diaSemanaTexto = 'Domingo';
//     break;
//   case 1:
//     diaSemanaTexto = 'Segunda';
//     break;
//   case 2:
//     diaSemanaTexto = 'Terça';
//     break;
//   case 3:
//     diaSemanaTexto = 'Quarta';
//     break;
//   case 4:
//     diaSemanaTexto = 'Quinta';
//     break;
//   case 5:
//     diaSemanaTexto = 'Sexta';
//     break;
//   case 6:
//     diaSemanaTexto = 'Sábado';
//     break;
//   default:
//     diaSemanaTexto = '';
//     break;
// }

