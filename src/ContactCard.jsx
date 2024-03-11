import React from 'react'

export default function ContactCard({image, name, email , age}) {
  return (
    <div className='contact-card'>
       <div className='contact-image'>
        <img src={image}></img>
       </div>
       <div className='contact-information'>
          <h3> Name : {name}</h3>
          <p>Email : {email}</p>
          <p>Age : {age}</p>
       </div>
    </div>
  )
}
