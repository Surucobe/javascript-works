import Error from 'next/error'

import Layout from '../component/Layout'
import Series from '../component/Series'
import Clips from '../component/Clips'

export default class extends React.Component {

  static async getInitialProps({ query, res }){
    let idChannel = query.id

    try{
      let [reqChannel, reqAudios, reqSeries] = await Promise.all([
        fetch(`https://api.audioboom.com/channels/${idChannel}`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
      ])

      if( reqChannel.status >= 400 ) {
        res.statusCode = reqChannel.status
        return { channel: null, audioClips: null, series: null, statusCode: reqChannel.status }
      }

      let dataChannel = await reqChannel.json()
      let channel = dataChannel.body.channel

      let dataAudios = await reqAudios.json()
      let audioClips = dataAudios.body.audio_clips

      let dataSeries = await reqSeries.json()
      let series = dataSeries.body.channels

      return { channel, audioClips, series, statusCode: 200 }
    } catch(e) {
      return { channel: null, audioClips: null, series: null, statusCode: 503 }
    }

  }
  render() {
  
    const { channel, audioClips, series, statusCode } = this.props

    if( statusCode !== 200 ){
      return <Error statusCode={ statusCode } />
    }

    return(
      <Layout title={ channel.title } >

          <div className="hero" style={{ backgroundImage: `url(${channel.urls.logo_image.original}` }} ></div>

          { series.length > 0 &&
            <React.Fragment>
                <Series
                arr = { series }
                />
            </React.Fragment>
          }

            <Clips 
            arr={ audioClips }
            />
          

          <style jsx>{`
            header{
              color: #fff;
              background: #8756ca;
              padding: 15px;
              font-size: 1.5em;
              font-weight: bold;
              text-align: center;
            }
            .channels {
              display: grid;
              grid-gap: 15px;
              padding: 15px;
              grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            }
            .channel {
              display: block;
              border-radius: 3px;
              box-shadow 0px 2px 6px rgba(0,0,0,0.15);
              margin-bottom: 0.5em;
              text-align: center;
            }
            .channel img {
              width: 100%;
            }
            h1 {
              text-align: center;
              font-weight: 600;
              padding: 15px;
            }
            h2 {
              padding: 5px;
              font-size: 0.9em;
              font-weigth: 600;
              margin: 0;
              color: whitesmoke;
              text-align: center;
            }
            h4{
              color: black;
            }
            .hero{
              height: 250px;
              width: 100%;
              background-position: center;
            }
          `}</style>

          <style jsx global>{`
            body{
              margin: 0;
              font-family: system-ui;
              background-color: #234050;
            }
            a{
              color: whitesmoke;
              text-decoration: none;
            }
            li{
              list-style: none;
              color: whitesmoke;
            }
          `}</style>
      </Layout>
    )
  }
}