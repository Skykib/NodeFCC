function mostrarTema(tema) {
  console.log(`Estoy aprendiendo${tema}`);
}

mostrarTema('prueba5');
setTimeout(mostrarTema, 1000, 'Node.js');
setTimeout(mostrarTema, 5000, 'prueba3');
setTimeout(mostrarTema, 9000, 'prueba4');

function sumar(a,b ) {
  console.log(a + b);
}

setTimeout(sumar, 10000, 5, 6 );
