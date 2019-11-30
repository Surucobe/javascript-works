import React from 'react'

const MemeCard = ({ memes }) =>{
    return(
        <React.Fragment>
          {memes.map((meme) => (
            <div key={meme.id} data-line={meme.box_count} className="Meme-Card">
              {/* <p> Name: { meme.name } </p> */}
                <img src={meme.url} alt={ meme.name } />
            </div>
          ))}
        </ React.Fragment>
      )
    }

export default MemeCard