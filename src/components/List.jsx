import React from 'react'
import useFetch from './useFetch';
import Box from './Box';

export default function List(props) {
    const markCompleted=props.markCompleted
    const data=props.data
    const pending=props.pending
    const error=props.error
    const todo=data.filter((obj)=>obj.status===false)
    const completed=data.filter((obj)=>obj.status===true)
    

  return (
    <div >
      list here
   
      {pending&&<div>loading....</div>}
      {error&&<div>{error}</div>}

      <div className='flex space-x-80'>
      <div className="border border-black bg-yellow-500 w-6/12">
        <p className='text-3xl underline-offset-1 underline'>pending...</p>
      <Box box={todo} markCompleted={markCompleted}/>
      </div>
      <div className="border border-black w-6/12">
        <p className='text-3xl underline-offset-1 underline'>completed</p>
      <Box box={completed} markCompleted={markCompleted}/>
      </div>
      </div>

    </div>
  )
}
