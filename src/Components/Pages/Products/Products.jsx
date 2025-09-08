import React from 'react'
import Header from '../../Common/Layout/Header/Header'
import Footer from '../../Common/Layout/Footer/Footer'
import PageTop from '../../Common/PageTop/PageTop'
import ProductsData from './ProductsData/ProductsData'
import SEO from '../../SEO'

const Products = () => {
  return (
 <section>
   <SEO
        title="Our Products - Guru Uruthi"
        description="Browse our premium quality traditional products."
        keywords="guru uruthi products, traditional foods, healthy snacks"
        url="/products"
      />
    <Header/>
    <PageTop title={"Products"}/>
    <ProductsData/>
    <Footer/>
 </section>
  )
}

export default Products