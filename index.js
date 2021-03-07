// , através de somas sucessivas (Ex.: 6 ∗ 4 = 4 + 4 + 4 + 4 + 4 + 4).

function mult(x, y) {
  let aux = 0;
  if (x == 0) {
    return aux;
  }
  aux += y;
  return mult(x - 1, y) + aux;
}

console.log(`Multiplicação de dois números naturais ${mult(6, 4)}`);

// Soma de dois números naturais, através de incrementos sucessivos (Ex.: 3 + 2 = + + (+ + + 1)).

function soma(x, y) {
  if (x + y == 0) {
    return 0;
  }
  return soma(x - 1, y) + 1;
}

console.log(`Soma de dois números naturais ${soma(3, 2)}`);

// Cálculo de 1 + 1/2 + 1/3 + 1/4 + ... + 1/N.

function somaFrac(n) {
  if (n == 1) {
    return 1;
  }
  return somaFrac(n - 1) + 1 / n;
}

console.log(`Cálculo de 1 + 1/2 + 1/3 + 1/4 + ... + 1/N. ${somaFrac(4)}`);

// Inversão de uma string.

function invertString(value) {
  if (value.length === 1) {
    return value;
  }
  return (
    value[value.length - 1] + invertString(value.slice(0, value.length - 1))
  );
}

console.log(`\nInversão de uma string (banana) = ${invertString("banana")}`);

/* 
    Gerador da sequência dada por:
    F(1) = 1
    F(2) = 2
    F(n) = 2 ∗ F(n − 1) + 3 ∗ F(n − 2).
*/

function sequenceGenerator(value) {
  if (value === 2 || value === 1) {
    return value;
  }

  return 2 * sequenceGenerator(value - 1) + 3 * sequenceGenerator(value - 2);
}

console.log(`\nGerador da sequência = ${sequenceGenerator(4)}`);

/**
    Gerador de Sequência de Ackerman:
    A(m, n) = n + 1, se m = 0
    A(m, n) = A(m − 1, 1), se m != 0 e n = 0
    A(m, n) = A(m − 1, A(m, n − 1)), se m != 0 e n != 0.
 */

function sequenceGeneratorAckerman(m, n) {
  if (m == 0) {
    return n + 1;
  }
  if (m > 0 && n === 0) {
    return sequenceGeneratorAckerman(m - 1, 1);
  }
  if (m > 0 && n > 0) {
    return sequenceGeneratorAckerman(
      m - 1,
      sequenceGeneratorAckerman(m, n - 1)
    );
  }
}

console.log(
  `\nGerador da sequência ackerman = ${sequenceGeneratorAckerman(2, 2)}`
);

//  A partir de um vetor de números inteiros, calcule a soma e o produto dos elementos do vetor.
function somaEProduto(list) {
  if (list.length === 1) {
    return [list[0], list[0]];
  }
  if (list.length === 2) {
    return [list[0] + list[1], list[0] * list[1]];
  }

  const soma = list[list.length - 2] + list[list.length - 1];
  const mult = list[list.length - 2] * list[list.length - 1];

  list.length = list.length - 2;

  const res = somaEProduto(list);

  return [soma + res[0], mult * res[1]];
}

console.log(
  `\nProdutos e soma de uma lista = ${somaEProduto([2, 4, 2, 3, 5])}`
);

// Verifique se uma palavra é palíndromo (Ex. aba, abcba, xyzzyx).

function palindromo(word) {
  if (word.length === 1) {
    return true;
  }

  if (word.length === 2) {
    return word[0] === word[1];
  }

  return word[0] === word[word.length - 1]
    ? palindromo(word.substring(1, word.length - 1))
    : false;
}

console.log(
  `\n é palíndromo? = ${palindromo("socorrammesubinoonibusemmarrocos")}`
);

// Dado um número n, gere todas as possíveis combinações com as n primeiras letras do alfabeto. Ex.: n = 3. Resposta: ABC, ACB, BAC, BCA, CAB, CBA.

/*
    Defina uma sequência de Fibonacci generalizada, de f0 a f1 como sequência fibg(f0, f1, 0), fibg(f0, f1, 1), fibg(f0, f1, 2), ..., onde:
    fibg(f0, f1, 0) = f0
    fibg(f0, f1, 1) = f1
    fibg(f0, f1, n) = fibg(f0, f1, n − 1) + fibg(f0, f1, n − 2), se n > 1.
 */
