import React from 'react'

const ImageCard = (props) => {
  return (
    <>
    <div>
        <img src={props.url} alt = {props.name} />
        <p style={{"color":"orange", "font-weight":"bold"}}> {props.name} </p>
        <p>Rank: {props.rank}</p>
        <p> Market Capital: {props.marketCap}  </p>
        <p> Price: {props.price}</p>        
    </div>
    </>
  )
}

export default ImageCard