import React from 'react'
import ImageCom from './ImageCom'


function Review({currRvw}) {
    function capitalize()   {
        let nameArr = currRvw.name.split(' ')
        nameArr = nameArr.map((word)=>word[0].toUpperCase()+word.substring(1))
        let temp = ''
        for(let i = 0; i < nameArr.length; i++) {
            temp += nameArr[i] + ' '
        }
        return temp.trimEnd()
    }
  return (
    <div className='review'>
        
        <ImageCom imageURL={currRvw.image}/>
        <div className='name'>{capitalize()}</div>
        <div className='job'>{currRvw.job.toUpperCase()}</div>
        <div className='text'>{currRvw.text}</div>
    </div>
  )
}

export default Review