import React from 'react'
import { useState,useEffect } from 'react'
import { Box, Stack, Typography} from '@mui/material'
import { borderRight } from '@mui/system'
import {  Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const SearchFeed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');

  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>(
      setVideos(data.items)
    ))
  },[selectedCategory])


  return (
    <Stack sx={{flexDirection:{sx:"column",
  md:"row"}}}>
    
    <Box p={2} sx={{overflowY:'auto',height:'90vh ' ,flex:2}}>
    <Typography variant ='h4' fontWeight='bold' mb={2}sx={{color:'white'}}>
      {selectedCategory}
      <span style ={{color:'#0282a2',marginLeft:'8px'}}>videos</span>
    </Typography>

    <Videos videos={videos} />
    
    </Box>
  </Stack>
  )
}

export default SearchFeed