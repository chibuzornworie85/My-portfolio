import React from 'react'
import './About.css'
import pic from "../Image/img2.jpg"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div className="kin">
      <h2 className='abt'>ABOUT</h2>
    <div className="als">
    <img src={pic} alt='img' />
      <p className="pages">
      I've always had the impression that I'm not the kind of person that joins in most of the activities my friends do, which has made me unique in every way. I always try to find a purpose in everything I set out to achieve, and I absorb lessons from the mistakes of others as long as they will help me progress. <br /> <br /> When I learned about software development, I focused all of my attention on learning how it functions because I was so eager to learn more about it. <br /> My excitement and desire to learn more grew as I became more familiar with some programming languages. <br /> <br />
      When ever I remember that I'm a coder, I always feel great, especially when I'm tackling an issue that exists in the real world, My love for technology inspired me to set the aim of always doing my best to make an impact wherever I find myself. <br /> <br />
      At first, I believed that coding was only for the most intelligent people, but I later came to understand that it was a game that everyone who had the right mindset, focus, and interest could play. <br /> <br />
      Although there is a saying that goes, "What your friends are doing, do as they do," I don't adhere to it; instead, as long as I'm on the proper route, I follow my own paths.
      </p>
    </div>
    <Link to='/' className='lo'>HOME</Link>
    </div>
    </>
  )
}

export default About
