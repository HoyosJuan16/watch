import React, { Fragment } from 'react'

import { Analogic } from '../components/Analogic'
import { Digital } from '../components/Digital'

import '../css/Watch.css'

export const Watch = ({mode,watch}) => {

  return(
    <Fragment>
      <div 
        className='container container-digital' 
        style={{'display':`${watch ? 'flex' : 'none'}`}}
      >
        <Digital mode={mode} />
      </div>
      <div 
        className='container container-analogic' 
        style={{'display':`${!watch ? 'flex' : 'none'}`}}
      >
        <Analogic mode={mode} />
      </div>
    </Fragment>
  )
}
