<<<<<<< HEAD
//função recursiva, função que se comporta como um loop.

function recursiva(max) {
  console.log(max);
  if (max>=10) return; // não esquecer de parar.
  max++;
  recursiva(max);  //aqui a função chama a si própria
}

recursiva(0);
=======
// função recusrsiva - chama a própria função

function recusrsiva(max) {
  console.log(max);
  if (max>=1000) return;
  max++;
  recusrsiva(max);
}

recusrsiva(1);
>>>>>>> 3da5cae5c557ed9f3f24dfbbdad4e758cb3a562e
