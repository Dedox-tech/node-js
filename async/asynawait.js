function saludo(nombre) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`Hola ${nombre}`)
      res(nombre)
    }, 1000)
  }) 
}

function terminar(nombre) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`Terminamos el programa ${nombre}`)
      rej('Tuvimos un error al terminar el programa')
    }, 500)
  }) 
}

function otroproceso() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`Otro proceso del programa ${nombre}`)
      res(nombre)
    }, 500)
  }) 
}

async function app() {
  try {
    await saludo('Stiven')
    await terminar('Stiven')
    await otroproceso()
  } catch (error) {
    console.log(error)
  }
  
}

console.log('Iniciando programa')
app()
