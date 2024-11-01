import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin, faMedium, faInstagram, faReddit } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='bg-black sm:px-16 px-8 py-7'>
        <div className='flex max-sm:justify-center'>
            <Link href="/">
                <img className='w-[190px]' src={'https://i.ibb.co/yWDNXn4/cusine-cascade-logo.png'} alt='logo' />
            </Link>
        </div>

        <div className="mt-5 gap-3 flex flex-col text-white">
            <div className="text-smsm:text-lg flex flex-col gap-2">
                <p className="font-poppins "><span className="font-bold">Phone: </span>+91 0987654321</p>
                <p className="font-poppins "><span className="font-bold">Email: </span>thescapadecafe@outlook.com</p>
            </div>

            <div className='flex gap-3 justify-center sm:mt-5 text-2xl'>
                    <Link to='https://x.com/sankar_axi' target="_blank">
                        <span><FontAwesomeIcon icon={faXTwitter} /></span>
                    </Link>
                    <Link to='https://www.linkedin.com/in/sankargnanasekar/' target="_blank" >
                        <span><FontAwesomeIcon icon={faLinkedin} /></span>
                    </Link>
                    <Link to='' target="_blank" >
                        <span><FontAwesomeIcon icon={faMedium} /></span>
                    </Link>
                    <Link to='https://instagram.com/sankar_axi' target="_blank" >
                        <span><FontAwesomeIcon icon={faInstagram} /></span>
                    </Link>
                    <Link to='' target="_blank" >
                        <span><FontAwesomeIcon icon={faReddit} /></span>
                    </Link>
                </div>
        </div>

        <div>
            <p className='text-center text-white mt-5 text-lg' >© {new Date().getFullYear()} Cuisine Cascade. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer