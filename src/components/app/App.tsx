import React , { useState, useEffect} from 'react'

import './App.scss'
import Sidebar from '../sidebar/Sidebar'
import Wrapper from '../containers/Wrapper'
import { IFetchObject } from '../../interfaces/IFetchObject'


type Props = {
}

 const App = ({}: Props) => {

  const [data, setData] = useState<IFetchObject[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [tags, setTags] = useState<string[]>([])
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [errors, setErrors] = useState<string>('');


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


const handleTagClick = (tag: string) => {
  setSelectedTag(tag);
};

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
            setTags(removeDuplicateTags(fetchData))
            setIsLoading(false)                
        } catch (error) {
            throw new Error (error)
            setErrors(error.message)
        }
    }

    fetchData()
  }, [])
  
  
  return (
    <div className='App'>
      <div className='main__container'>
        <Sidebar tags={tags} isLoading={isLoading} onTagClick={handleTagClick} selectedTag={selectedTag}/>  
        <Wrapper data={data} isLoading={isLoading} selectedTag={selectedTag}/>
      </div>
    </div>
    
  )
}

export default App
