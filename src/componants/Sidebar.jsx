import React from 'react'
import '../componants/Sidebar.css'
import photo from "../../public/img.jpeg"

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="profile">
          <img src={photo} alt="photo" />
          <h1>MD JUEL RANA</h1>
          <p>Software Developer</p>

        </div>
        <hr className='profile_hr' />

        <div className="contact pl-8">
          <div>
            <p className='label'>Email</p>
            <a className='value' href='mailto:juelr5351@gmail.com'>juelr5351@gmail.com</a>
          </div>

          <div>
            <p className='label'>Phone</p>
            <a className='value' href='tel:+880 1581-838244' >+880 1581-838244</a>

          </div>

          <div>
            <p className='label'>Location</p>
            <p className='value'>Sylhet-3100 , Bangladesh</p>
          </div>

        </div>
        <hr className="contact_hr" />

        <div className="social_media">
          <a href="https://github.com/Glitch-CoD3" target='_main'> <img className='github' src="https://www.svgrepo.com/show/452211/github.svg" alt="social-icon" /> </a>
          <a href="https://www.linkedin.com/in/md-juel-rana-944949202" target='_main'> <img className='linkedin' src="https://www.svgrepo.com/show/500918/linkedin.svg" alt="social-icon" /> </a>
          <a href="https://www.facebook.com/juel.rana.chaya/" target='_main'> <img className='facebook' src="https://www.svgrepo.com/show/503338/facebook.svg" alt="social-icon" /> </a>
          <a href="https://www.youtube.com/@mdjuelrana3500" target='_main'> <img className='youtube' src="https://www.svgrepo.com/show/486513/youtube-filled.svg" alt="social-icon" /> </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar