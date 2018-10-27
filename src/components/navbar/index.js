import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import './styles.css'
///react-redux-navbar
function NavBar(props) {
  return (
    <nav>
      <ul className='top-menu'>
      <li>Welcome: {props.guestName.guest}</li>
      <li><NavLink exact to='/react-redux-navbar'>Home</NavLink></li>
      <li><NavLink exact to='/react-redux-navbar/products'>Products</NavLink></li>
      <li><NavLink exact to='/react-redux-navbar/webpack'>Web Dev Technologies</NavLink></li>
      <li><NavLink exact to='/react-redux-navbar/fruits'>Fruits</NavLink></li>
      </ul>
    </nav>
  )
}

function mapStateToProps(state) {
    return {
      guestName: state.guestName
    }
}

export default withRouter(connect(mapStateToProps)(NavBar))