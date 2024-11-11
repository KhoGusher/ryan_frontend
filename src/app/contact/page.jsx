
import React from 'react'
import ContactForm from '../../../components/Contact/ContactForm'
import MapSection from '../../../components/Contact/Map'
import EmailLocationSection from '../../../components/Contact/EmailLocationSection'

export default function Contact() {
  return (
    <div>
      <MapSection/>
      <EmailLocationSection/>
      <ContactForm/>
    </div>
  )
}

