import React, { useState, useEffect } from 'react'
import {IFetchObject} from "../../interfaces/IFetchObject"
import './Sidebar.scss'
type Props = {}




export default function Sidebar({}: Props) {

    const [tags, setTags] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isActive, setIsActive] = useState<number>(0)

    function removeDuplicateTags(objects: IFetchObject[]): string[] {
        const uniTags = new Set<string>()

        for (const obj of objects) {
            for (const tag of obj.tags) {
                if(!uniTags.has(tag)) {
                    uniTags.add(tag)
                }
            }
        }

        return Array.from(uniTags);
    }


    useEffect (()=>{
        const url:string = "https://logiclike.com/docs/courses.json"
    
        const fetchData = async function () {
            try {
                setIsLoading(true)

                const fetchData = await fetch(url, {
                    method: "get"
                })
                    .then(response => response.json())
            
                setTags(removeDuplicateTags(fetchData)) 
                setIsLoading(false)                
            } catch (error) {
                alert(error)
            }
        }

        fetchData()
    }, [])

   

   

  return (
    <div className="sidebar-container">
        <ul className='sidebar-list'>
            {isLoading && (
                <span> Loading... </span>
            )}
            <li 
            className={isActive ===  0? 'sidebar-list-element active' : 'sidebar-list-element'} 
            onClick={()=> setIsActive(0)}>
                    Все категориии
            </li>
            {tags?.map((tag, i)=>{
                let id = i+1
                return (
                <li 
                className={isActive === id ? 'sidebar-list-element active' : 'sidebar-list-element'} 
                onClick={()=> setIsActive(id)}
                key={id}>{tag}</li> 
                )
            })
            }
        </ul>
    </div>
  )
}