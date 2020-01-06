import Link from 'next/link'

export default class Clips extends React.Component {
  render(){
    const { arr } = this.props

    return(
      <React.Fragment>
        <h2>Ultimos Clips</h2>
        <ul className="channels">
          { arr.map((clip) => (
            <Link href={`/podcast?id=${ clip.id }`} key={ clip.id }>
              <a className="channel">
                <li>
                  <img src={ clip.urls.image || clip.channel.urls.logo_image.original } alt={ clip.title } />
                  <h4> { clip.title } </h4>
                </li>
              </a>
            </Link>
          )) }
        </ul>

        <style jsx>{`
            .channels {
              display: grid;
              grid-gap: 15px;
              padding: 15px;
              grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            }
            .channel {
              height: 280px;
              display: block;
              border-radius: 3px;
              box-shadow 0px 2px 6px rgba(0,0,0,0.15);
              background-color: white;
              color: black;
              margin-bottom: 0.5em;
              text-align: center;
            }
            .channel img {
              height: 175px;
              width: 100%;
            }
            h2 {
              padding: 5px;
              font-size: 1.9em;
              font-weigth: 600;
              margin: 0;
              color: whitesmoke;
              text-align: center;
            }
            h4{
              color: black;
            }
          `}</style>
      </React.Fragment>
    )
  }
}