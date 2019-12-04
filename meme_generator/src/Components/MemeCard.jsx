import React from 'react'
import { Link } from 'react-router-dom'

// const MemeCard = ({ memes }) =>{
//     return(
//         <React.Fragment>
//           {memes.map((meme) => (
//             <div key={meme.id} data-line={meme.box_count} className="Meme-Card">
//               <Link to="/">
//                 <img className="Actual-Meme" src={meme.url} alt={ meme.name } />
//               </Link>
//             </div>
//           ))}
//         </ React.Fragment>
//       )
//     }

  class MemeCard extends React.Component{
    render(){
      return(
        //testing
        <React.Fragment>
          {this.props.memes.map((meme) => (
            <div key={meme.id} data-line={meme.box_count} className="Meme-Card">
              <Link to="/">
                <img className="Actual-Meme" src={meme.url} alt={ meme.name } />
              </Link>
            </div>
          ))}
        </ React.Fragment>
      )
    }
  }

export default MemeCard