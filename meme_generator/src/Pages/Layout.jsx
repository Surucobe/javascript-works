import React from 'react'

import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'

function Layout(props){
  return(
    <React.Fragment>
      <Navbar />
      <Hero />
      { props.children }
    </ React.Fragment>
  )
}

export default Layout