import React , { useState} from 'react'

import './App.scss'
import Sidebar from '../sidebar/Sidebar'
import Wrapper from '../containers/Wrapper'


type Props = {

}

 const App = ({}: Props) => {
  
  const url = "https://logiclike.com/docs/courses.json"
  return (
    <div className='App'>
      <Sidebar/>  
      <Wrapper/>
    </div>
    
  )
}

export default App
