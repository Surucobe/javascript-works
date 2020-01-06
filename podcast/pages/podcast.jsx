import Podcast from '../component/Podcast'

import Layout from '../component/Layout'

export default class extends React.Component{
  static async getInitialProps({ query }){
    const podcastId = query.id

    let reqClip = await fetch(`https://api.audioboom.com/audio_clips/${podcastId}}`)
    let dataClip = await reqClip.json()
    let audioClip = dataClip.body.audio_clip

    return audioClip
  }

  render(){
    const audioClip = this.props

    return(
      <Layout title={ audioClip.title } >

          <h1>{ audioClip.title }</h1>

          <Podcast 
          clipImg={ audioClip.urls.image || audioClip.channel.urls.logo_image.original }
          altTitle={ audioClip.title }
          audioClip={ audioClip.urls.high_mp3 }
          queryId={ this.props.channel.id }
          />

          <style jsx>{`
            h1{
              text-align: center;
              color: whitesmoke;
            }
          `}</style>
      </Layout>
    )
  }
}