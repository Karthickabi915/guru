import React from 'react'
import Header from '../../Common/Layout/Header/Header'
import Footer from '../../Common/Layout/Footer/Footer'
import PageTop from '../../Common/PageTop/PageTop'
import HealthBenefitsData from './HealthBenefitsData/HealthBenefitsData'
import SEO from '../../SEO'

const HealthBenefits = () => {
  return (
  <section>
      <SEO
        title="Health Benefits - Guru Uruthi"
        description="Discover the health benefits of our authentic traditional products."
        keywords="health benefits, nutritious snacks, guru uruthi"
        url="/healty-benefits"
      />
    <Header/>
    <PageTop title={"Health Benefits"}/>
    <HealthBenefitsData/>
    <Footer/>
  </section>
  )
}

export default HealthBenefits