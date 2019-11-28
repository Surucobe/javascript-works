import React from 'react'

const MemeCard = ({ memes }) =>{
    return(
        <div>
          {memes.map((meme) => (
            <div id={meme.id}>
              <p> Name: { meme.name } </p>
              <img src={meme.url} alt="" width="80px" height="80px" />
            </div>
          ))}
        </div>
      )
    }

export default MemeCard