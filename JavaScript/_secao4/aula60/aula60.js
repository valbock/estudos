// função recusrsiva - chama a própria função

function recusrsiva(max) {
  console.log(max);
  if (max>=1000) return;
  max++;
  recusrsiva(max);
}

recusrsiva(1);