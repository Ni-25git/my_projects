import React from 'react'
import Footer from '../Components/Footer'
import TimeControl from '../Components/TimeControl'
import FAQ from '../Components/FAQ'
import SimplePricing from '../Components/SimplePricing'
import ColumnDiv from '../Components/ColumnDiv'

const Pricing = () => {
  return (
    <div>
      <SimplePricing />
      <ColumnDiv />
      <FAQ />
    <TimeControl />
    <Footer />
    </div>
  )
}

export default Pricing
