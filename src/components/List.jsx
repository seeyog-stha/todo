import React from 'react'
import useFetch from './useFetch';
import Box from './Box';

export default function List() {
    const [data, pending,error]=useFetch("http://localhost:8000/todo")
    // console.log(data);
    const todo=data.filter((obj)=>obj.status===false)
    const completed=data.filter((obj)=>obj.status===true)

  return (
    <div >
      list here
   
      {pending&&<div>loading....</div>}
      {error&&<div>{error}</div>}

      <div className='flex space-x-80'>
      <div className="border border-black bg-yellow-500 w-6/12">

      <Box box={todo} />
      </div>
      <div className="border border-black w-6/12">

      <Box box={completed} />
      </div>
      </div>

    </div>
  )
}
