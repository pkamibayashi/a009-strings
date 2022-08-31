//Crie a const para a frase aqui

const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
const trocandoFrase = frase.replaceAll('verde', 'rosa').replaceAll('azul', 'laranja');
const TrocandoFrase2= frase.replace('mas não deixe o gato sair', 'MAS NÃO DEIXE O GATO SAIR')

console.log(`frase sem trocar as cores: ${frase}`)
console.log(`frase trocando as cores: ${trocandoFrase}`)
console.log(`Frase extra : ${TrocandoFrase2}`)



 

// # Exercício 3

// A partir da frase a seguir, faça o que se pede

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// ```

// a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

// c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log(trocandoFrase.includes('verde'))
console.log(trocandoFrase.includes('laranja'))

// **EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”