// , através de somas sucessivas (Ex.: 6 ∗ 4 = 4 + 4 + 4 + 4 + 4 + 4).

function mult(x, y) {
    let aux = 0
    if (x == 0) {
        return aux
    }
    aux+= y
    return mult(x-1, y) + aux
}

console.log(`Multiplicação de dois números naturais ${mult(6,4)}`);

// Soma de dois números naturais, através de incrementos sucessivos (Ex.: 3 + 2 = + + (+ + + 1)).

function soma(x, y) {
    if (x + y == 0) {
        return 0
    }
    return soma(x-1, y) + 1
}

console.log(`Soma de dois números naturais ${soma(3,2)}`);

// Cálculo de 1 + 1/2 + 1/3 + 1/4 + ... + 1/N.

function somaFrac(n) {
    if(n == 1) { 
        return 1
    }
    return somaFrac(n-1) + 1/n
}

console.log(`Cálculo de 1 + 1/2 + 1/3 + 1/4 + ... + 1/N. ${somaFrac(4)}`);

// Inversão de uma string.


function invertString(value) {
    console.log(value)
    if(value.length === 1) { 
        return value
    }
    return value[value.length - 1] + invertString(value.slice(value.length - 1, 1))
}

console.log(`Inversão de uma string. = ${invertString('banan')}`);

/* 
    Gerador da sequência dada por:
    F(1) = 1
    F(2) = 2
    F(n) = 2 ∗ F(n − 1) + 3 ∗ F(n − 2).
*/


/**
    Gerador de Sequência de Ackerman:
    A(m, n) = n + 1, se m = 0
    A(m, n) = A(m − 1, 1), se m != 0 e n = 0
    A(m, n) = A(m − 1, A(m, n − 1)), se m != 0 e n != 0.
 */

//  A partir de um vetor de números inteiros, calcule a soma e o produto dos elementos do vetor.

// Verifique se uma palavra é palíndromo (Ex. aba, abcba, xyzzyx).


// Dado um número n, gere todas as possíveis combinações com as n primeiras letras do alfabeto. Ex.: n = 3. Resposta: ABC, ACB, BAC, BCA, CAB, CBA.

/*
    Defina uma sequência de Fibonacci generalizada, de f0 a f1 como sequência fibg(f0, f1, 0), fibg(f0, f1, 1), fibg(f0, f1, 2), ..., onde:
    fibg(f0, f1, 0) = f0
    fibg(f0, f1, 1) = f1
    fibg(f0, f1, n) = fibg(f0, f1, n − 1) + fibg(f0, f1, n − 2), se n > 1.
 */