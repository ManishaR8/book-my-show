import React from 'react'
import Movies from './Movies'
import RecommendMovies from './RecommendMovies'

const MoviesCont = () => {
  return (
    <div className='py-20 md:py-4 bg-[#f5f5f5]'>
        <div className='flex flex-col items-center justify-center'>
            <Movies />
            <RecommendMovies />
        </div>
    </div>
  )
}

export default MoviesCont