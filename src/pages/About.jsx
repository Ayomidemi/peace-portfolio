import React from 'react'
import FirstSection from '../components/FirstSection'
import ServicesSection from '../components/ServicesSection'
import SkillSection from '../components/SkillSection'
import Title from '../components/Title'

import design from '../img/pro5.jpg'
import arti from '../img/pro3.jpg'
import graphics from '../img/pro4.jpg'


const About = () => {
  return (
    <div className='About'>
        < Title title={'About Me'} span={'About Me'}/>

        <FirstSection />

        < Title title={'My Skills'} span={'My Skills'}/>

        <div className="skillsContainer">
                <SkillSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillSection skill={'React Js'} progress={'80%'} width={'80%'} />
                <SkillSection skill={'Web Design'} progress={'70%'} width={'70%'} />
                <SkillSection skill={'Bootstrap'} progress={'70%'} width={'70%'} />
                <SkillSection skill={'Sass'} progress={'80%'} width={'80%'} />
                <SkillSection skill={'GitHub'} progress={'60%'} width={'60%'} />   
                <SkillSection skill={'Redux'} progress={'60%'} width={'60%'} />

            </div>

            <Title title={'Services'} span={'Services'} />
            <div className='services-container'>
              <ServicesSection image={design} title={'Web Design'} 
                text={'A vast web of possibilities to improve your site!'}/>
                
                <ServicesSection image={arti} title={'Artificial Intelligence'} 
                text={'Discover the power of AI'}/>

<ServicesSection image={graphics} title={'Graphic Design'} 
                text={'Do More With Your Designs.'}/>
              </div>


        </div>
  )
}

export default About