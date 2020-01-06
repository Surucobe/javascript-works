export default class Series extends React.Component {
  render() {
    const { arr } = this.props
    
    return(
      <React.Fragment>
        <h2>Series</h2>
        <ul className="series-list-container">
          {arr.map((item) => (
              <li className="series-list-item" key={ item.id } >
                <img className="item-image" src={item.urls.banner_image.original} alt=""/>
                <p>
                  <strong> { `${ item.title }:` } </ strong>
                  { item.formatted_description.substr(3, item.formatted_description.length - 8 ) }
                </p>
              </li>
            ))
          }
        </ul>

          <style jsx>{`
            header{
              color: #fff;
              background: #8756ca;
              padding: 15px;
              font-size: 1.5em;
              font-weight: bold;
              text-align: center;
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
            .item-image {
              height: 55px;
              width: 85px;
            }
            .series-list-container{
              display: grid;
              grid-template-columns: 750px;
              grid-row-gap: 8px;
              justify-content: center;
            }
            .series-list-item {
            height: 55px;
            font-size: 15px;
            display: flex;
            color: black;
            background-color: #fff;
            align-items: center;
            }
            .series-list-item p {
              display: flex;
              flex-direction: column;
              margin: 0;
            }
          `}</style>
      </React.Fragment>
    )
  }
}