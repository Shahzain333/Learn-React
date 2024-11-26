import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function github() {
    // const [data, setData] = useState([])

    // useEffect( () => {
        
    //     fetch('https://api.github.com/users/Shahzain333')
    //     .then((response) => response.json())
    //     .then( data => {
    //         console.log(data);
    //         setData(data)
    //     })

    // }, [])
    
    const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex justify-center items-center'>
      <img className='rounded-lg' src={data.avatar_url} alt='Image Github' width={300}/>
      Github followers: {data.followers}
    </div>
  )
}

export default github

export const githubInfoLoadder = async () => {
    const response = await fetch('https://api.github.com/users/Shahzain333')
    return response.json()
}
