// # Exercício 2

// Observe a string abaixo.

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";



// A partir dela, execute os passos abaixo:

// a) Remova o excesso de espaços no final da string;
let minhaStringSemEspaco = minhaString.trim()
// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log(`quantidade de caracteres antes da remoção é ${minhaString.length}`)
console.log(`quantidade de caracteres depois da remoção é ${minhaStringSemEspaco.length}`)

// c) Substitua os traços `________` por “sticioso”.
let substituirTraco = minhaStringSemEspaco.replaceAll("________", "sticioso");
console.log(`Substitui underline por supersticioso ${substituirTraco}`)