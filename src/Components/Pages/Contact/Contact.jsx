import React from 'react'
import Header from '../../Common/Layout/Header/Header'
import Footer from '../../Common/Layout/Footer/Footer'
import PageTop from '../../Common/PageTop/PageTop'
import ContactRef from './ContactRef/ContactRef'
import ContactMap from './ContactMap/ContactMap'
import SEO from '../../SEO'

const Contact = () => {
  return (
<section>
   <SEO
        title="Contact Us - Guru Uruthi"
        description="Get in touch with Guru Uruthi for any inquiries or support."
        keywords="contact guru uruthi, customer support, inquiries"
        url="/contact"
      />
    <Header/>
    <PageTop title={"Contact Us"}/>
    <ContactRef/>
    <ContactMap/>
    <Footer/>
</section>
  )
}

export default Contact