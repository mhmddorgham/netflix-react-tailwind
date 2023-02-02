import React, { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike((prev) => !prev);
  }

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
      <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item.title}</p>
        <p>
          <AiOutlineHeart onClick={handleLike} className={` text-[20px] text-white ${!like ? "block" : " hidden"} absolute top-4 left-4`} />
          <AiFillHeart onClick={handleLike} className={` text-[20px] text-red-600 ${like ? "block" : " hidden"} absolute top-4 left-4`} />
        </p>
      </div>
    </div>
  )
}

export default Movie