import React, { useState } from 'react'
import { mount } from 'tasks/Tasks';
const Add = () => {
  useState(()=>{
    mount()
  },[])
  return (
    <div className='   relative  px-2'>
      <tasks-hotel></tasks-hotel>
    </div>
  )
}

export default Add