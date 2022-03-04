import React from 'react'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

function Cycle({cycleReview}) {
  return (
    <div className='cycle'>
        <IoIosArrowBack onClick={()=>cycleReview(false)} className='backIcon'/>
        <IoIosArrowForward onClick={()=>cycleReview(true)} className='forwardIcon'/>
    </div>
  )
}

export default Cycle