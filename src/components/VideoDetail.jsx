import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { Typography,Box,Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { ClassNames } from '@emotion/react'

const VideoDetail = () => {
  const {id} = useParams();

  const [videoDetail, setVideoDetail] = useState(null)

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=>setVideoDetail(data?.items[0]))
  },[id])

  return (
    <Box minHeight='95vh'>
      
      <Stack direction={{xs:'column',md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%',positions:'sticky',top:'86px'}}>
            <ReactPlayer url={`https://youtube.com/watch?v=${id}`} ClassName='react-player' controls />
          </Box>
        </Box>
      </Stack>
      </Box>
  )
}

export default VideoDetail