import Link from 'next/link'
import Head from 'next/head'

export default class Layout extends React.Component {
  render(){
    const { children, title } = this.props

    return(
      <React.Fragment>
        <Head>
          <title> {`Podcast - ${title}` } </title>
        </Head>
        
        <header>
          <Link href="/">
            <a>Podcast</a>
          </Link>
        </header>
          { children }

        <style jsx>{`
          header{
            color: #fff;
            background: #8756ca;
            padding: 15px;
            font-size: 1.5em;
            font-weight: bold;
            text-align: center;
          }
          header a{
            color: #fff;
          }
        `}</style>
        
        <style jsx global>{`
          body{
            margin: 0;
            font-family: system-ui;
            background-color: #234050;
          }
          a{
            text-decoration: none;
          }
        `}</style>
      </React.Fragment>
    )
  }
}