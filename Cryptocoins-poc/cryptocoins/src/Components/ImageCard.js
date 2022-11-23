import React from 'react'

const ImageCard = (props) => {
  return (
    <>
    <div>
        <img src={props.url} alt = {props.name} />
        <p style={{"color":"orange", "font-weight":"bold"}}> {props.name} </p>
        <p><span>Rank:</span> {props.rank}</p>
        <p> <span>Market Capital: </span>{props.marketCap}  </p>
        <p> <span>Price: </span>{props.price}</p>        
    </div>
    </>
  )
}

export default ImageCard