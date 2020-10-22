import React , { useState,Fragment , useEffect} from 'react';

import { Header } from './components/Header'
import { Watch } from './pages/Watch'

export const App = () => {
  const [mode,setMode] = useState(false)
  const [watch,setWatch] = useState(false)
  useEffect(() => {
    if(mode){
      document.querySelector('.body').className = 'body body-dark'
    }else{
      document.querySelector('.body').className = 'body body-light'
    }
  })
  const actMode = () => {
    setMode(!mode)
  }
  const actWatch = () => {
    setWatch(!watch)
  }
  return (
    <Fragment>
      <Header 
        actMode={actMode}
        actWatch={actWatch}
      />
      <Watch mode={mode} watch={watch} />
    </Fragment>
  )
}