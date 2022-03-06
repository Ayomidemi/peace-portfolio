import React from 'react'

import Title from '../components/Title'
import ContactItem from '../components/ContactItem'
import phone from '../img/phone.svg'
import email from '../img/emailme.svg'
import location from '../img/location.svg'

const Contact = () => {
  return (
    <div>
      
      <div className='b-title'>
      <Title title={'Contact'} span={'Contact'} />
        </div>
    <div className='contactpage'>
      <div className="map-sect">
      <iframe title='University of Lagos' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0467727887876!2d3.387656014422043!3d6.5157643250617525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d24c04d3e75%3A0x7347f1a6be13e004!2sUniversity%20of%20Lagos!5e0!3m2!1sen!2sng!4v1646560178180!5m2!1sen!2sng" width="600" height="450" style={{border:0 }}allowFullScreen="" loading="lazy"></iframe>       
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+234 8139722966'} text2={''} title={'Phone'}/>
                    <ContactItem icon={email} text1={'adenijiayomide13@gmail.com'} text2={''} title={'Email'}/>
                    <ContactItem icon={location} text1={'University of Lagos, Lagos'} text2={'Nigeria'} title={'Address'}/>
                </div>
            </div>
      </div>
    
  )
}

export default Contact