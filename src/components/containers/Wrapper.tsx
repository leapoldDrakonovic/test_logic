import React, {useState, useEffect} from 'react'
import Card from '../card/Card'
import { IFetchObject } from '../../interfaces/IFetchObject'


type Props = {}

export default function Wrapper({}: Props) {
  
  const [data, setData] = useState<IFetchObject[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect (()=>{
    const url:string = "https://logiclike.com/docs/courses.json"
    
    const fetchData = async function () {
        try {
            setIsLoading(true)

            const fetchData = await fetch(url, {
                method: "get"
            })
                .then(response => response.json())
        
            setData(fetchData)
            setIsLoading(false)                
        } catch (error) {
            alert(error)
        }
    }

    fetchData()
  }, [])

  return (
    <div style={{'marginTop': 10}}>
        {isLoading && (<span> Loading ... </span>)}
        {data.map((card)=>{
          return (
            <Card key={card.id} data={card}/>
          )
        })}
    </div>
  )
}