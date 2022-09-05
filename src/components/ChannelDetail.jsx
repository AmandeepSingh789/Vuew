import { Box } from '@mui/material'
import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import {Videos,ChannelCard} from'./'

const ChannelDetail = () => {
  const {id} =useParams();

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0]) );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items) )
  },[id])
  return (

    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background:'linear-gradient(286deg, rgba(0,74,173,1) 0%, rgba(0,74,173,1) 0%, rgba(2,130,162,1) 49%, rgba(3,152,158,1) 68%)',
          zIndex:10,
          height:'300px'
        }} >
        </div>
        <ChannelCard channelDetail={channelDetail} marginTop ='-110px'/>
      </Box>
      <Box display="flex" p='2'>
          <Box sx={{mr:{sm:'100px'}}} />
              <Videos videos={videos} />
          
      </Box>
      
    </Box>
  )
}

export default ChannelDetail