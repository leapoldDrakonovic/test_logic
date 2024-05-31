import React from 'react'
import { IFetchObject } from '../../interfaces/IFetchObject'
import "./Card.scss"



export default function Card({data} : {data: IFetchObject}) {
  return (
    <div className='card-container'>
        <div className='card-img-bgc-container' style={{'background': data.bgColor}}>
          <img src={data.image} alt="Image" className='card-img'/>
        </div>
        <span className='card-title'>
        {data.name}
        </span>
    </div>
  )
}