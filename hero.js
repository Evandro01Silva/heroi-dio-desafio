console.log("-------------- Status do herói --------------");
console.log("");

let nomeHeroi = "Bradocão";
let expHeroi = 5600; // mude o valor da experiência para verificar o nível do herói

console.log("Nome do herói: " + nomeHeroi);
console.log("Experiência do herói: " + expHeroi);

if (expHeroi <= 1000) {
  console.log("Nível do herói: Ferro");
}

if (expHeroi >= 1001 && expHeroi <= 2000) {
  console.log("Nível do herói: Bronze");
}

if (expHeroi >= 2001 && expHeroi <= 5000) {
  console.log("Nível do herói: Prata");
}

if (expHeroi >= 5001 && expHeroi <= 7000) {
  console.log("Nível do herói: Ouro");
}

if (expHeroi >= 7001 && expHeroi <= 8000) {
  console.log("Nível do herói: Platina");
}

if (expHeroi >= 8001 && expHeroi <= 9000) {
  console.log("Nível do herói: Ascendente");
}

if (expHeroi >= 9001 && expHeroi <= 10000) {
  console.log("Nível do herói: Imortal");
}

if (expHeroi >= 10001) {
  console.log("Nível do herói: Radiante");
}