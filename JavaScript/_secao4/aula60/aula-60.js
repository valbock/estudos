// //função recursiva, função que se comporta como um loop.

// function recursiva(max) {
//   console.log(max);
//   if (max>=10) return; // não esquecer de parar.
//   max++;
//   recursiva(max);  //aqui a função chama a si própria
// }

// recursiva(0);


//função recusrsiva - chama a própria função

function recusrsiva(max) {
  console.log(max);
  if (max>=1000) return;
  max++;
  recusrsiva(max);
}

recusrsiva(1);
