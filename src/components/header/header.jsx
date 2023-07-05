import React from 'react'
import '../header/header.css'
import logo from '../../img/logo.png'

export default function header() {
  return (
    <div className='container-header'>
    <img className='logo' src={logo} alt='logo' />
    </div>

  )
}
