import React from 'react'
import products from '../products'
import ProductTab from '../components/ProductTab'

const Home = () => {
  return (
    <div className='px-5 scroll-smooth'>
      <h1 className='text-2xl font-semibold mb-2.5'>Recommended Products</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {products.map((product, key) => (
          <ProductTab key={key} data={product}/>
        ))}
      </div>
    </div>
  )
}

export default Home