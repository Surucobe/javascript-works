import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css'
import Layout from './Pages/Layout'
import Gallery from './Pages/Gallery'
//import NewMeme from 'Pages/NewMeme'

function App(){
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Gallery} />
          {/* <Route exact path="/NewMeme" component={NewMeme} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App