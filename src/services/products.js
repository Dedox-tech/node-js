const { products } = require('../data');
const NotFoundError = require('../utils/errors/notFoundError');
const boom = require('@hapi/boom')

class ProductService{
  async getProducts()
  {
    const all_products = await Promise.resolve(products)
    if(all_products.length === 0)
    {
      //throw new NotFoundError('Productos no encontrados', 404, 'Tabla de base de datos vacia')
      throw boom.notFound('Productos no encontrados')
    }

    return all_products;
  }

  async getProductDetail(id)
  {
    const all_products = await Promise.resolve(products)
    const product = all_products.filter(product => product.id === id)[0]
    if(!product)
    {
      throw boom.notFound('Producto no encontrado')
    }

    if(product.id === 1)
    {
      throw boom.forbidden('Recurso no permitido')
    }

    return product
  }

  async getProductByName(name)
  {
    const all_products = await Promise.resolve(products)
    return all_products.filter(product => product.name === name)
  }

  async saveNewProduct(product)
  {
    const all_products = await Promise.resolve(products)
    all_products.push(product)
    return all_products
  }

  async updateProduct(id, modified_product)
  {
    const all_products = await Promise.resolve(products)
    const product_to_update = all_products.filter(product => product.id === parseInt(id))[0]

    product_to_update.name = modified_product.name
    product_to_update.price = modified_product.price
    product_to_update.description = modified_product.description

    return product_to_update
  }

  async deleteProduct(id)
  {
    const all_products = await Promise.resolve(products)
    return all_products.filter(product => product.id !== parseInt(id))
  }
}

module.exports = ProductService