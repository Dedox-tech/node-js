const method_not_allow = (req, res, next) => 
{
  console.log('Valindando metodo')
  if(req.method === 'GET')
  {
    next()
  }
  else
  {
    next(new Error('Method not allow'))
    // res.status(405).json({
    //   error: 'Method not allow'
    // })
  }
}

const validate_permissions = (req, res, next) => 
{
  console.log("Validando permisos")
  if(req.body.id === '1')
  {
    res.status(500).json(
      {
        error: "Error procesando transaccion"
      }
    )
  }
  else
  {
    next()
  }
}

const validate_data = (req, res, next) => {
  console.log("validando datos")
  const data = req.body

  if(!isNaN(data.name))
  {
    res.status(500).json(
      {
        error: "El dato no es valido"
      }
    )
  }
  else 
  {
    next()
  }
}


module.exports = {
  method_not_allow,
  validate_permissions,
  validate_data
}