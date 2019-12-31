import React from 'react'
import { Link } from 'react-router-dom'

import './styles/NewMeme.css'

class NewMeme extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        myConf: {
          method: 'GET',
          mode: 'cors',
          cache: 'default',
          crossDomain: true,
        },
      }
    }

    componentDidMount(){
      const memeID = this.props.match.params.memeId
      this.getMeme(memeID)
    }

    async getMeme(id){

      const data = await fetch(`https://api.imgflip.com/get_memes`, this.state.myConf)
      const obj = data.json()
      // this.setState({currentMeme: obj})
      console.log(obj)
    }

    handleSubmit = e =>{
      e.preventDefault()
    }

  render(){
    return(
      <React.Fragment>
        <div className="NewMeme-Container">
          <form className="NewMeme-Form" onSubmit={this.handleSubmit}>
            <label htmlFor="">First Line</label>
            <input type="text" name="first-line" />
            <label htmlFor="">Second line</label>
            <input type="text" name="second-line" />
            <Link className="NewMeme-Link" to="/">
              Go Back
            </Link>
            <button className="Submit-button">
              Submit
            </button>
          </form>
          <div className="NewMeme-img">
            <figure className="edit-meme-container">
              <img className="edit-meme" src="" alt="" />
              <span className="edit-text">Hola</span>
              <span className="edit-text">que hay?</span>
            </figure>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default NewMeme