import React from 'react'
//import { BrowserRouter, Switch } from 'react-router-dom'

import './index.css'
import Layout from './Pages/Layout'
import Gallery from './Pages/Gallery'

function App(){
  return(
    <Layout>
      <Gallery />
    </Layout>
  )
}

export default App