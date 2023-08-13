function mostarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

console.log('antes de setImmediate');

setImmediate(mostarTema, 'Node.js');

console.log('Despues de setImmediate');
