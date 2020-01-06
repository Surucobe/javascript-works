import 'isomorphic-fetch'
import Link from 'next/link'
import Error from 'next/error'

import Layout from '../component/Layout'
import ChannelGrid from '../component/ChannelGrid'

export default class extends React.Component {

  static async getInitialProps() {
    try{
      const req = await fetch('https://api.audioboom.com/channels/recommended')
      const { body: channels } = await req.json()
      return { channels, statusCode: 200 }
    } catch(e) {
      resizeBy.statusCode = 503
      return { channels: null, statusCode: 503 }
    }
  }

  render() {
    const { channels, statusCode } = this.props

    if( statusCode !== 200 ){
      return <Error statusCode={ statusCode } />
    }

    return(
      <Layout title='Home' >

        <ChannelGrid channels={channels} />

      </Layout>
    )
  }
}