let numero = prompt('Digite um número');
numero = Number(numero);
document.getElementById('numero').innerHTML=`Seu número é ${numero}`;
document.getElementById('p1').innerHTML=`Raiz quadrada: ${numero**(1/2)}`;
document.getElementById('p2').innerHTML=`${numero} é inteiro: ${Number.isInteger(numero)}`;
document.getElementById('p3').innerHTML=`${Number.isNaN(numero*2)}`;
document.getElementById('p4').innerHTML=`${Math.floor(numero)}`;
document.getElementById('p5').innerHTML=`${Math.ceil(numero)}`;
numero = numero.toFixed(2);
document.getElementById('p6').innerHTML=`${numero}`;

