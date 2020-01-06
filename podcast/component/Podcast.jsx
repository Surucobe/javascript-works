import { withRouter } from 'next/router'

export default class Podacst extends React.Component{
  render() {
    const { altTitle, audioClip, clipImg } = this.props

    return(
      <React.Fragment>
        <div className="podcast-container">
            <img src={ clipImg } alt={ altTitle } className="hero" />
            <audio controls autoPlay>
              <source src={ audioClip } type="audio/mpeg" />
            </audio>
        </div>

          <style jsx>{`
          .hero{
              width: 250px;
              height: 250px;
            }
            .podcast-container{
              height: 350px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
            }
            audio{
              outline: 0;
            }
          `}</style>
      </React.Fragment>
    )
  }
}