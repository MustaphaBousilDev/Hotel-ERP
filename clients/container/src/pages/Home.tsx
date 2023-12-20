import React,{useState} from 'react'
import { mount } from 'remoteApp/CounterComp';
const Home = () => {
  useState(()=>{
    mount()
  },[])
  return (
    <div className='  bg-red-400'>
      <h1>This is react HostApp</h1>
      <counter-app></counter-app>
    </div>
  )
}

export default Home