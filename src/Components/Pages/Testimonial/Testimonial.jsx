import React from 'react'
import Header from '../../Common/Layout/Header/Header'
import Footer from '../../Common/Layout/Footer/Footer'
import PageTop from '../../Common/PageTop/PageTop'
import TestimonialData from './TestimonialData/TestimonialData'
import SEO from '../../SEO'

const Testimonial = () => {
  return (
<section>
   <SEO
        title="Customer Testimonials - Guru Uruthi"
        description="See what our happy customers are saying about Guru Uruthi products."
        keywords="guru uruthi reviews, customer feedback, testimonials"
        url="/testimonial"
      />
    <Header/>
    <PageTop title={"Testimonial"}/>
    <TestimonialData/>
    <Footer/>
</section>
  )
}

export default Testimonial