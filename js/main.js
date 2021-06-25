function clicou() {
  document.getElementById('agradecimento').innerHTML = 'Obrigado por clicar';

  // console.log(document.getElementById('agradecimento'));

  //   alert('Obrigado por Clicar');
}

function redirecionar() {
  window.open('https://globallabs.academy/');
  // window.location.href = 'https://globallabs.academy/';
}

function trocar(elemento) {
  // document.getElementById('mousemove').innerHTML =
  //   'Obrigado por passar o mouse';
  elemento.innerHTML = 'Obrigado por passar o mouse';
}

function voltar(elemento) {
  //document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui';
  elemento.innerHTML = 'Passe o mouse aqui';
}

function load() {
  alert('Página carregada');
}

function funcaoChange(elemento) {
  console.log(elemento.value);
}
// function soma(n1, n2) {
//   return n1 + n2;
// }

// function validaIdade(idade) {
//   var validar;
//   if (idade >= 18) {
//     validar = true;
//   } else {
//     validar = false;
//   }
//   return validar;
// }

// var idade = prompt('Qual sua idade');
// console.log(validaIdade(idade));
//alert(soma(5, 10));

// var d = new Date();
// alert(d.getMinutes());

// var count;

// for (count = 0; count <= 5; count++) {
//   alert(count);
// }

// var count = 0;
// while (count <= 5) {
//   console.log(count);
//   count++;
// }

/*var idade = prompt('Qual sua idade?');
var idade;
if (idade >= 18) {
  alert('Maior de idade');
} else {
  alert('Menor de idade');
}
*/
// var frutas = [
//   { nome: 'maçã', cor: 'vermelha' },
//   { nome: 'uva', cor: 'roxo' },
// ];
// console.log(frutas);
// alert(frutas[1].nome);

// var fruta = { nome: 'maçã', cor: 'vermelha' };
// console.log(fruta);
// alert(fruta.cor);

// var lista = ['maçã', 'pêra', 'laranja'];
//lista.push('Uva');
//lista.pop();

//console.log(lista.length); tamanho da lista
// console.log(lista);
// console.log(lista.join('/'));
// console.log(lista.toString());  transforma em string
// console.log(lista.reverse()); imprime a lista ao contrario

// var nome = 'Guilherme Corrêa';
// var n1 = 25;
// var n2 = 10;
// var frase = 'Japão é o melhor time do mundo';
// // alert(nome + ' tem ' + idade + ' anos');
// //alert(idade + idade2);
// console.log(n1 +n2);
// console.log(nome);
// console.log(frase);
// // alert(frase.replace('Japão', 'Brasil'));
