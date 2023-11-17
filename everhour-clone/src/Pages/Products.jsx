import React from 'react'
import Footer from '../Components/Footer'
import ProductsEmail from '../Components/ProductsEmail'
import Testimonial from '../Components/Testimonial'
import ProductCompany from '../Components/ProductCompany'
import OptionalSS from '../Components/OptionalSS'
import ProductControl from '../Components/ProductControl'
import TimeManagement from '../Components/TimeManagement'
import TimeGrid from '../Components/TimeGrid'
import Billing from '../Components/Billing'
import Managingtask from '../Components/Managingtask'
import ManagingGrid from '../Components/ManagingGrid'
import BillingGrid from '../Components/BillingGrid'

const Products = () => {
  return (
    <div>
      <ProductControl />
      <TimeManagement />
      <TimeGrid />
      <Billing />
      <BillingGrid />
      <Managingtask />
      <ManagingGrid />
      <OptionalSS />
      <ProductCompany />
      <Testimonial />
      <ProductsEmail />
      <Footer />
    </div>
  )
}

export default Products
