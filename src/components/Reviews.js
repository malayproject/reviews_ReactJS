import React, {useState} from 'react'
import Review from './Review'
import data_reviews from './Data'
import Cycle from './Cycle'

function Reviews() {
  const [currRvwId, setCurrRvwId] = useState(0)
  
  function cycleRight() {
      currRvwId === (data_reviews.length-1)?
      setCurrRvwId(0):
      setCurrRvwId(prev => prev+1)
  }
  function cycleLeft() {
    currRvwId === 0?
    setCurrRvwId(data_reviews.length-1):
    setCurrRvwId(prev => prev-1)
  }
  function cycleReview(flag)    {
    flag? cycleRight(): cycleLeft()
  }
  console.log(`current review id: ${currRvwId}`)
  return (
    <div className='reviews'>
        <Review currRvw={data_reviews[currRvwId]}/>
        <Cycle cycleReview={cycleReview}/>
        <button className='btn' onClick={()=>setCurrRvwId(Math.floor(Math.random()*data_reviews.length))}>Surprise me</button>
    </div>
  )
}

export default Reviews