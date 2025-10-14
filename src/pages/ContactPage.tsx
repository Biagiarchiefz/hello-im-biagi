import React from 'react'
import contactMe from "../assets/img/Contact Me-b (1).png"

const ContactPage = () => {
  return (
    <div className='text-white px-[160px] mt-20'>
        <div className="title relative">
          <h1 className="text-[#7E62F3] font-bold text-5xl relative pt-16 px-11 flex justify-center">
            CONTACT ME
          </h1>
          <img
            src={contactMe}
            alt=""
            className="w-[773px] absolute top-0 left-1/2 -translate-x-1/2"
          />
        </div>
    </div>
  )
}

export default ContactPage
