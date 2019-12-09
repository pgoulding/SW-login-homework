import React from 'react'
import Icon from '../images/SpeakWrite_Logo.png'
import "./Nav.scss"

export const Nav = (props) => {
  return (
    <nav>
      <img src={Icon} alt="SpeakWrite Transcription Services" />
      {props.isLoggedIn
       &&
      <button
        className="nav_button-logout"
        onClick={() => props.toggleLogin(false)}
      >LOGOUT
      </button>
      }
      {!props.isLoggedIn
      &&
      <button 
        className="nav_button-login"
        // onClick={() => props.toggleLogin(true)}
      >LOGIN
      </button>
      }
    </nav>
  )
}
