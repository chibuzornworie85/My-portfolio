import React from 'react'
import './Service.css'
import {BiCheck} from "react-icons/bi"

const Service = () => {
  return (
    <>
    <div className='serve' id='services'>
      <h2>Services</h2>
      <div className="services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li> 
              <BiCheck className='service_list_icon' />
              <p>Planning and developing software solution.</p>
            </li>
            <li> 
              <BiCheck className='service_list_icon' />
              <p>Supporting and maintaining a company's website</p>
            </li>
            <li> 
              <BiCheck className='service_list_icon' />
              <p>Developing web application.</p>
            </li>
            <li> 
              <BiCheck className='service_list_icon' />
              <p>Web hosting.</p>
            </li>
            <li> 
              <BiCheck className='service_list_icon' />
              <p>Web optimization.</p>
            </li>
            <li> 
              <BiCheck className='service_list_icon' />
              <p>Web programming.</p>
            </li>
            <li> 
              <BiCheck className='service_list_icon' />
              <p>Creating a site's architecture, designing its layout and user interface, and coding it to work correctly.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li> 
              <BiCheck className='service_list_icon' />
              <p>Search optimization.</p>
            </li>
            <li> 
              <BiCheck className='service_list_icon' />
              <p>Blogs.</p>
            </li>
            <li> 
              <BiCheck className='service_list_icon' />
              <p>Website.</p>
            </li>
            <li> 
              <BiCheck className='service_list_icon' />
              <p>Marketing and promotion materials to emails.</p>
            </li>
            <li> 
              <BiCheck className='service_list_icon' />
              <p>Updating content for everything from brochures.</p>
            </li>
          </ul>
        </article>
      </div>
    </div>
    </>
  )
}

export default Service
