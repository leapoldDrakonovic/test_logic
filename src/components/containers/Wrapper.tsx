import React from 'react'
import Card from '../card/Card'
import { IFetchObject } from '../../interfaces/IFetchObject'
import "./Wrapper.scss"


type Props = {
  data: IFetchObject[],
  isLoading: boolean,
  selectedTag: string
}

export default function Wrapper({data, isLoading, selectedTag}: Props) {

  let filteredData: IFetchObject[] | undefined
  if (selectedTag !== '') {
    filteredData = data.filter((item) => 
    item.tags.includes(selectedTag));
  } else {
    filteredData = data;
  }

  
  return (
    <div style={{'marginTop': 10}} className='cards__container'>
        {isLoading && (
          <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
        )}
        {filteredData?.map((card)=>{
          return (
            <Card key={card.id} data={card}/>
          )
        })}
    </div>
  )
}