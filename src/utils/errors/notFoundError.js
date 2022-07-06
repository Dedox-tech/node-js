class NotFoundError extends Error {
  constructor(message, errorCode, detailedError)
  {
    super(message)
    console.log(`args: ${message}, errorcode: ${errorCode}, detailed error: ${detailedError}`)
    this.errorCode = errorCode || 404
    this.detailedError = detailedError || 'No se encontraron resultados'
  }
}

module.exports = NotFoundError