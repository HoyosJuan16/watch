import React from 'react'

import '../css/Header.css'

export const Header = ({actMode,actWatch}) => {
  return (
    <ul className='options'>
      <li className='tg-list-item'>
        <input type='checkbox' id='btnDarkLight' className='toggle' />
        <label htmlFor='btnDarkLight' id='btnMode' className='btn-toggle' onClick={()=>actMode()}></label>
      </li>
      <li className='tg-list-item'>
        <input type='checkbox' id='btnDigAna' className='toggle' />
        <label htmlFor='btnDigAna' id='btnWatch' className='btn-toggle' onClick={()=>actWatch()}></label>
      </li>
    </ul>
  )
}