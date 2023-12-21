import React,{useState} from 'react'
import { mount } from 'tasks/Tasks';
const Home = () => {
  useState(()=>{
    mount()
  },[])
  return (
    <div className='  bg-red-400'>
      <h1>This is react HostApp</h1>
      <tasks-hotel></tasks-hotel>
    </div>
  )
}

export default Home