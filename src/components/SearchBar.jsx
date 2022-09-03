import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'

// Paper is nothing more than a div with a white bg and elevation property
const SearchBar = () => {
  return (
    <Paper component="form"
    onSubmit={()=>{}}
    sx={{
        borderRadius:20,
        border: '1px solid #e3e3e3',
        pl:2,
        boxShadow: 'none',
        mr:{sm:5}
    }}
    >
        <input type="text"
        className='search-bar'
        placeholder='Search...'
        value="" 
        onChange={()=>{}}/>
        <IconButton type='submit' sx={{p:'10px',
        color:'red'
    }}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar