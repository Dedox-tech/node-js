function saludo(nombre, callback) {
  setTimeout(() => {
    console.log(`Hola ${nombre}`)
    callback(nombre)
  }, 1000)
}

console.log('Iniciando programa')
saludo('Stiven', (nombre) => {
  console.log('Terminando programa')
})
