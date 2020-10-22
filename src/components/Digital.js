import React, { useEffect } from 'react'

import '../css/Digital.css'

export const Digital = ({mode}) => {
  useEffect(() => {
    setInterval(() => {
      let day = new Date()
      let hh = day.getHours() 
      let mm = day.getMinutes() 
      let ss = day.getSeconds() 
    
      let S1 = Math.floor(ss/10)
      let S2 = ss%10
      let M1 = Math.floor(mm/10)
      let M2 = mm%10
      let H1 = Math.floor(hh/10)
      let H2 = hh%10
    
      document.querySelector('.H1').className = `number H1 show-${H1}`
      document.querySelector('.H2').className = `number H2 show-${H2}`
      document.querySelector('.M1').className = `number M1 show-${M1}`
      document.querySelector('.M2').className = `number M2 show-${M2}`
      document.querySelector('.S1').className = `number S1 show-${S1}`
      document.querySelector('.S2').className = `number S2 show-${S2}`
    }); 
  })
  return (
    <div className={mode ? 'digital digital-dark' : 'digital digital-light'} id='digital'>
      <div className='digital-numbers'>
        <div className='number H1 show-8'>
          <span className='d1'></span>
          <span className='d2'></span>
          <span className='d3'></span>
          <span className='d4'></span>
          <span className='d5'></span>
          <span className='d6'></span>
          <span className='d7'></span>
        </div>
        <div className='number H2 show-8'>
          <span className='d1'></span>
          <span className='d2'></span>
          <span className='d3'></span>
          <span className='d4'></span>
          <span className='d5'></span>
          <span className='d6'></span>
          <span className='d7'></span>
        </div>
        <span className='dot'>:</span>
        <div className='number M1 show-8'>
          <span className='d1'></span>
          <span className='d2'></span>
          <span className='d3'></span>
          <span className='d4'></span>
          <span className='d5'></span>
          <span className='d6'></span>
          <span className='d7'></span>
        </div>
        <div className='number M2 show-8'>
          <span className='d1'></span>
          <span className='d2'></span>
          <span className='d3'></span>
          <span className='d4'></span>
          <span className='d5'></span>
          <span className='d6'></span>
          <span className='d7'></span>
        </div>
        <span className='dot'>:</span>
        <div className='number S1 show-8'>
          <span className='d1'></span>
          <span className='d2'></span>
          <span className='d3'></span>
          <span className='d4'></span>
          <span className='d5'></span>
          <span className='d6'></span>
          <span className='d7'></span>
        </div>
        <div className='number S2 show-8'>
          <span className='d1'></span>
          <span className='d2'></span>
          <span className='d3'></span>
          <span className='d4'></span>
          <span className='d5'></span>
          <span className='d6'></span>
          <span className='d7'></span>
        </div>
      </div>
    </div>
  )
}