const express = require('express')
const router = express.Router();
const ProductService = require('../services/products')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/', limits: {
  fileSize: 1024
} })
const productService = new ProductService()

const { validate_data_Joi, validate_permissions } = require('../middlewares')
const { successResponse, errorResponse } = require('../utils/responses');
const { productSchema } = require('../utils/schemas/product')

//router.use('/', method_not_allow)

router.get('/all', async (req, res) => {
  
  try {
    const my_products = await productService.getProducts()  
    successResponse(req, res, my_products)
  } catch (error) {
    //console.error(`Se produjo un error: ${error.detailedError}`)
    //errorResponse(req, res, error.message, error.errorCode)
    errorResponse(req, res, error)
  }

});

router.get('/detail/:id', async (req, res) => {
  const id = parseInt(req.params.id)

  try {
    const my_product_detail = await productService.getProductDetail(id)  
    successResponse(req, res, my_product_detail)
  } catch (error) {
    errorResponse(req, res, error)
  }
})

router.get('/', async (req, res) => {
  const product_name = req.query.name
  //Procesar nuestro query
  console.log(product_name)
  
  const my_product_by_name = await productService.getProductByName(product_name)

  res.status(200).json({
    data: my_product_by_name
  })
})


router.post('/', validate_data_Joi(productSchema, 'body'), validate_permissions,  async(req, res) => {
  const new_product = req.body
  const my_products = await productService.saveNewProduct(new_product)

  res.status(201).json({
    data: my_products
  })
})


router.put('/:id', async (req, res)=> {
  const id = req.params.id
  const product_to_update = req.body
  const product = await productService.updateProduct(id, product_to_update)


  res.status(200).json({
    data:product
  })
})

router.patch('/:id', async (req, res)=> {
  const id = req.params.id
  const product_to_update = req.body
  const product = await productService.updateProduct(id, product_to_update)

  res.status(200).json({
    data:product
  })
})

router.delete('/:id', async(req, res)=> {
  const id = req.params.id
  const new_product_list = await productService.deleteProduct(id)

  res.status(200).json({
    data: new_product_list
  })

})

module.exports = router