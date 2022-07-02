function saludo(nombre) {
  return new Promise((res, rej) => {
    // setTimeout(() => {
    //   console.log(`Hola ${nombre}`)
    //   rej(nombre)
    // }, 1000)

    if(nombre == 'Stiven')
    {
      res(nombre)
    } else 
    {
      rej('Error de seguridad!')
    }
  }) 
}

console.log('Iniciando programa')
saludo('Stiven')
  .then((nombre) => {
    console.log(`Terminando proceso, adios ${nombre}`)
  })
  .catch((nombre) => {
    console.log(`Tuvimos un error ${nombre}`)
  })
