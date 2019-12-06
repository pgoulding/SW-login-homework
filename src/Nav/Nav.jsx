import React from 'react'
import Icon from '../Icon'
import "./Nav.scss"

export const Nav = (props) => {
  return (
    <nav>
      <Icon />
      {props.isLoggedIn
       &&
      <button
        className="nav_button-logout"
      >Logout 
      </button>
      }
      {!props.isLoggedIn
      &&
      <button 
        className="nav_button-login"
      >Login
      </button>
      }
    </nav>
  )
}
