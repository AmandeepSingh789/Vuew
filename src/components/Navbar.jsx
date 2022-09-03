import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import vuew from '../assets/VUEW.png'
import SearchBar from './SearchBar';
// Stack  is MUI;s version of flex

const Navbar = () => (

    <Stack direction = "row" 
    alignItems="center" p={2} 
    sx={{position:'sticky',background:'#000',top:0,
    justifyContent: 'space-between'}}>
        <Link to="/" style={{display:'flex',alignItems:'center'}}>
            <img src={vuew} alt="logo" height={45} className='logo'/>
            </Link>
        <SearchBar />
    </Stack>
    
  
)

export default Navbar