import React, { useState} from 'react'
import './Sidebar.scss'



type Props = {
    tags: string[],
    isLoading: boolean,
    onTagClick: (tag: string) => void,
    selectedTag: string
}


export default function Sidebar({tags, isLoading, onTagClick, selectedTag}: Props) {

    const [isActive, setIsActive] = useState<number>(0)

    function handleLinkClick (tag: string, id: number): void {
        onTagClick(tag)
        setIsActive(id)
    }

  return (
    <div className="sidebar__container">
        <ul className='sidebar__list'>
            <li 
            className={isActive ===  0? 'sidebar_list_element active' : 'sidebar_list_element'} 
            onClick={()=>  handleLinkClick('', 0)}>
                    Все категориии
            </li>
            {isLoading && tags.length <= 0 ? (
                <div className='loading__spin'></div>
            ) : (
                tags?.map((tag, i)=>{
                    let id = i+1
                    return (
                    <li 
                    className={isActive === id ? 'sidebar_list_element active' : 'sidebar_list_element'} 
                    onClick={()=> handleLinkClick(tag, id)}
                    key={id}>{tag}</li> 
                    )
                })
            )}
        </ul>
    </div>
  )
}