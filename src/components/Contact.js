import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../styles/components/contact.css';

const Contact = (props) => {
  return (
    <section className="contact">
      <a href="mailto:jeremiah.mccurdy@gmail.com" className="button-standard button-primary">
        <FontAwesome 
          className='icon-sm'
          name='envelope-o'
          style={{ color: '#2A3A3F', marginRight: '10px' }}
        />
        {props.contact.buttonText}
      </a>

    </section>
  )
}

export default Contact;