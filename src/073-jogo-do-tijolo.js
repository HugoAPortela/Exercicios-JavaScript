// EXERCÍCIO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// URL: https://www.urionlinejudge.com.br/judge/pt/problems/view/1436

// RESUMO: Ler uma sequência de números e imprimir o número do meio da sequência, 
// em caso de sequências pares, dê preferência ao lado direito

// Há uma vila em Bangladesh, onde o jogo de tijolo é muito popular. 
// Jogo de tijolo é um jogo de equipe. Cada equipe é constituída por um número ímpar de jogadores.
// O número de jogadores deve ser maior do que 1, mas não pode ser superior a 10.
// A idade de cada jogador deve estar entre 11(inclusive) e 20(inclusive).
// Não há dois jogadores com a mesma idade. Há um capitão para cada equipe.

// A falta de comunicação entre dois jogadores depende da sua diferença de idade,
// ou seja, é maior se a diferença de idade for maior. 
// Assim, eles selecionam o capitão de uma equipe de maneira que
// a quantidade de jogadores desta equipe que são mais jovens e mais velhos do que ele é igual.

// As idades de todos os membros da equipe são fornecidas. Você tem que determinar a idade do capitão.

// Entrada
// A entrada começa com um número inteiro T (T ≤ 100), representando o número de casos de teste.
// Cada uma das próximas T linhas irá começar com um número inteiro N (1 < N < 11), número de membros da equipe,
// seguido por N inteiros separados por espaço representando as idades de todos os membros de uma equipe.
// Cada um destes N inteiros será entre 11 e 20(inclusive). 
// Nota-se que, as idades serão dadas estritamente em ordem crescente ou estritamente em ordem decrescente.
// Nós não vamos mencionar qual está aumentando e qual está diminuindo,
// você tem que ser cuidadoso o suficiente para lidar com ambas as situações.

// Saída
// Para cada caso de teste, imprima uma linha no formato “Case x: a”\(sem as aspas),
// onde x é o número do caso de teste e a é a idade do capitão.


// CÓDIGO <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// Ponto de entrada, é a sequencia de todas os números (idades)
const str = "5 19 17 16 14 12";

// Para pegarmos cada idade individualmente,
// Usamos:
const ages = str
  // split() pra criar um array com cada número
  .split(" ")
  // Nesse array, transformamos todos os números em string como números do tipo Number
  .map(age => Number(age))
  // E então usamos sort() para deixar na ordem crescente
  .sort((a, b) => a - b);

// Aqui, pegamos o index das idades, cujo index deve ser a metade do tamanho total do array
// Assim ficamos exatamente com o elemento que está no meio
// Nota: usamos Math.round, por que caso dê um número decimal, arredonde pra cima, e então pra baixo
// Pra cima, por que estamos dando preferencia para o número do lado esquerdo
const cap = ages[Math.round(ages.length / 2)];

// Em  seguida mostramos no console o número calculado acima
console.log(cap);

// Saída esperada para as idades [5 19 17 16 14 12]:
// '16'
