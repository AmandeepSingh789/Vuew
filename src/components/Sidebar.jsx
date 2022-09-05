import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'


const Sidebar = ({selectedCategory, setSelectedCategory}) => {

  return (
    <Stack direction="row"
    sx={{
        overflowY:'scroll',
        height:{sx:"auto", md:'95%'},
        flexDirection:{md:'column'},}} >
        {categories.map((category)=>(
            <button className='category-btn'
            onClick={()=> setSelectedCategory(category.name)}
            style={{
                background:category.name===selectedCategory && 'linear-gradient(286deg, rgba(0,74,173,1) 0%, rgba(0,74,173,1) 0%, rgba(2,130,162,1) 49%, rgba(3,152,158,1) 68%)',
                color:'white'
            }} key={category.name}>

                <span style={{ color: category.name===selectedCategory ? 'white' :
                '#0282a2'
                , marginRight:'15px' }}>
                    
                    {category.icon}</span> 
                <span style={{opacity:category.name===selectedCategory ? '1' :
                '0.8' }}>{category.name}</span>
            </button>
        ))}
        </Stack>
  )
}

export default Sidebar