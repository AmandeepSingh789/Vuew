import React from 'react'
import { useState,useEffect } from 'react'
import { Box, Stack, Typography} from '@mui/material'
import { borderRight } from '@mui/system'
import { Sidebar , Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
 
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  },[selectedCategory])


  return (
    <Stack sx={{flexDirection:{sx:"column",
  md:"row"}}}>
    <Box sx ={{height:{sx:'auto',md:'92vh'},
  borderRight:'1px solid #3d3d3d', px:{sx:0,md:2}}}>
      <Sidebar selectedCategory = {selectedCategory}
      setSelectedCategory={setSelectedCategory}
      />
      <Typography className='copyright' variant='body2' 
      sx={{mt:1.5,color:'#fff'}}
      >

        Copyright 2022 Vuew Media
      </Typography>
    </Box>
    <Box p={2} sx={{overflowY:'auto',height:'90vh ' ,flex:2}}>
    <Typography variant ='h4' fontWeight='bold' mb={2}sx={{color:'white'}}>
      New
      <span style ={{color:'#0282a2',marginLeft:'8px'}}>videos</span>
    </Typography>

    <Videos videos={[]} />
    </Box>
  </Stack>
  )
}

export default Feed