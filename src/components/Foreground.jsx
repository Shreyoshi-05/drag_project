import React, { useRef } from 'react'
import Cart from './Cart'



const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      des :"Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet",
      filesize :'.9mb',
      close : true,
      tag : {
        isOpen : true,
        tagTitle :"Download Now",
        tagColor : "pink"
      }
    },
    {
      des :"Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet",
      filesize :'.9mb',
      close : false,
      tag : {
        isOpen : false,
        tagTitle :"Download Now",
        tagColor : "pink"
      }
    },
    {
      des :"Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet",
      filesize :'.9mb',
      close : true,
      tag : {
        isOpen : true,
        tagTitle :"Upload Now",
        tagColor : "pink"
      }
    },

  ]

  return (
    <div ref={ref} className='foreground_page'>
      {
        data.map((item , idx)=>(
          <Cart data={item} reference={ref}/>
        ))
      }
    </div>
  )
}

export default Foreground
