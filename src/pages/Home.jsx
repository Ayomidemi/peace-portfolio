import React from 'react'
import { GitHub, LinkedIn, Twitter } from '@material-ui/icons'


const Home = () => {
  return (
    <div className='Homepage'>

    <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Peace Adeniji.</span>
                </h1>
                <p className="h-sub-text">
                I'm a Front-End Developer in Lagos, Nigeria.
I have a dedicated passion for UI effects, animations and creating intuitive, dynamic user experiences.
   Welcome to my space and let's make something special!
                </p>
                <div className="icons">

                    <a href='https://www.linkedin.com/in/peace-adeniji-a4198b193' className="icon-holder">
                        < LinkedIn className='icon ln' />
                        </a>

                    <a href='https://github.com/Ayomidemi' className="icon-holder">
                    < GitHub className='icon gh'/>
                        </a>
                   
                   <a href='https://twitter.com/Pease_xoxo/' className="icon-holder">
                       < Twitter className='icon tw'/>
                       </a>
                    
                </div>
            </header>
      </div>
     
  )
}

export default Home