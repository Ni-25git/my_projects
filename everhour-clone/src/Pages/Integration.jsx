import React from 'react'
import Footer from '../Components/Footer'
import IntegrationEmail from '../Components/IntegrationEmail'
import LoginImageDiv from '../Components/LoginImageDiv'
import Timetracking from '../Components/Timetracking'
import WebsiteIntegration from '../Components/WebsiteIntegration'
import NativeIntegration from '../Components/NativeIntegration'

const Integration = () => {
  return (
    <div>
      <Timetracking />
      <NativeIntegration />
      <WebsiteIntegration />
      <IntegrationEmail />
      <LoginImageDiv />
    <Footer />
    </div>
  )
}

export default Integration
