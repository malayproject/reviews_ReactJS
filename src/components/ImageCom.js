import React from 'react'

import {FaQuoteRight} from 'react-icons/fa'

function ImageCom({imageURL}) {
  return (
    <div className='imageCom'>
        <img src={imageURL} className='img'></img>
        <div className='quoteBack'>
            <FaQuoteRight />
          </div>
    </div>
  )
}

export default ImageCom