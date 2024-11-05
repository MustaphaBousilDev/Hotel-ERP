import React from 'react'
import './timeline.scss'
const Timeline = () => {
  return (
    <div className="container">
  <div className="wrapper">
    <h1 className=' text-center'> A day in my 'sleepy' life 😅</h1>
    <ul className="sessions">
      <li className='timeline'>
        <div className="time ">09:00 AM</div>
        <p className=' text-sm'>How is it already 9:00? Just how??? 🤯🤯</p>
      </li>
      <li className='timeline'>
        <div className="time">09:05 AM</div>
        <p className=' text-sm'>Few more minutes of sleep won't do anyone any harm 🤷..</p>
      </li>
      <li className='timeline'>
        <div className="time">09:05 AM</div>
        <p className=' text-sm'>Few more minutes of sleep won't do anyone any harm 🤷..</p>
      </li>
    </ul>
  </div>
</div> 
  )
}

export default Timeline