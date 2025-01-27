import { Button, styled } from '@mui/material'
import React from 'react'
import {SlMagnifier} from 'react-icons/sl'

const SearchButton = styled(Button)({
    padding:'6px 12px',
    backgroundColor:"green",
    borderTopRightRadius:"10px",
    borderBottomRightRadius:"10px",
    borderTopLeftRadius:"0px",
    borderBottomLeftRadius:"0px",
    boxShadow:"none"
})

const Searchbar = () => {
  return (
    <div className=' w-48 flex'>
        <input className=' w-40 h-10 pl-3 rounded-l-2xl border border-gray-500' type="text" placeholder='Search' />
        <SearchButton className='rounded-r-full'  variant='contained'><SlMagnifier/></SearchButton>
    </div>
  )
}

export default Searchbar