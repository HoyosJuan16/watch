import React, { useEffect } from 'react'

export const Analogic = ({mode}) => {
  useEffect(()=>{
    setInterval(()=>{
      const deg = 6 
      // Hands
      const hr = document.querySelector('#hr')
      const mn = document.querySelector('#mn')
      const sc = document.querySelector('#sc')
      let day = new Date()
      let hh = day.getHours() * 30
      let mm = day.getMinutes() * deg
      let ss = day.getSeconds() * deg
  
      hr.style.transform = `rotate(${(hh)+(mm/22)}deg)`
      mn.style.transform = `rotate(${mm}deg)`
      sc.style.transform = `rotate(${ss}deg)`
    })
  })
  return (
    <div id="analogic" className={mode ? "analogic analogic-dark" :"analogic analogic-light"}>
      <ul className="hours-marks" id='marks'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul className="digits" id="digits">
        <li>3</li>
        <li>6</li>
        <li>9</li>
        <li>12</li>
      </ul>
      <div className="hours-hand" id="hr"></div>
      <div className="minutes-hand" id="mn"></div>
      <div className="seconds-hand" id="sc"></div>
    </div>
  )
}
