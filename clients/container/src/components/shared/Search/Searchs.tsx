import React from 'react'
import Input from '../Input/CustomInput'
import { IoSearchOutline } from 'react-icons/io5'

const Searchs = () => {
  return (
    <div className="search">
        <Input
            type='text' 
            icon={<IoSearchOutline/>}
            name='search' 
            placeholder='search...' 
            onChange={()=>{}}
        />
    </div>
  )
}

export default Searchs