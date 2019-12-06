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
      >LOGOUT
      </button>
      }
      {!props.isLoggedIn
      &&
      <button 
        className="nav_button-login"
      >LOGIN
      </button>
      }
    </nav>
  )
}
