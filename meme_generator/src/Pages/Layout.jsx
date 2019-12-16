import React from 'react'

import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'

function Layout(props){
  return(
    <React.Fragment>
      <Navbar />
      <Hero />
      { props.children }
      <Footer />
    </ React.Fragment>
  )
}

export default Layout