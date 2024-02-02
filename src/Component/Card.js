import React from 'react'

export const Card = (props) => {
    const add=()=>{
        // alert("1")
        props.addcart3(props.rs1)
    }
  return (


    <div className='card'>
        <img src={props.img1} alt='error'></img>
         <h3>title:{props.title1}</h3>
         {/* <h3>para:{props.para1}</h3> */}
         <h3>rs:{props.rs1}</h3>
         <button  onClick={add}>AddToCart</button>
    </div>

  )
}
