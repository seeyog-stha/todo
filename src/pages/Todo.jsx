import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import Create from '../components/create'
import List from '../components/list'
import useFetch from '../components/useFetch'
export default function Todo() {
  const {data:initialdata, pending,error}=useFetch("http://localhost:8000/todo")
  const[check,setCheck]=useState(true)
  const [todoData,setTodoData]=useState(null)
  if(!pending&&check===true){
    setTodoData(initialdata)
    setCheck(false)
  }
  const [maxId,setMaxId]=useState(0)
  // console.log(initialdata)
  // console.log("hey")
  // console.log(todoData)
  useEffect(()=>{
    if(initialdata.length>0){
      // to get the max id 
      const maxId = initialdata.reduce((max, obj) => (obj.id > max ? obj.id : max), -Infinity);
      setMaxId(maxId)
    }
  },[initialdata])
  const addTodo=(text)=>{
    const newTodo={
      id:maxId+1,
      details:text,
      status:false
    }
    setTodoData([...todoData,newTodo])
    setMaxId(maxId+1)
    create_post(newTodo)
  }
  let create_post = async (newTodo) => {
    let options = {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
     await fetch(
      "http://localhost:8000/todo",
      options
    );
  };
  const markCompleted=(id,details)=>{
    
    const updatedData=todoData.map((item)=>{
      if(item.id==id){
        return {...item,status:true}
      }
      return item
    })
    setTodoData(updatedData)
    update_post(id,details)
  }
  const update_post = async (idd,detailss) => {
    // console.log(e.target.id,e.target.name)
  
    let options = {
      method: "PUT",
      body: JSON.stringify({
        id:idd,
        details:detailss,
         status:true}
      ),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
     await fetch(
     ` http://localhost:8000/todo/`+idd,
      options
    );
     }  
  return (
    <div>
      <Heading/>
     { todoData&&<Create id={maxId} addTodo={addTodo}/>}
   { todoData&&<List data={todoData} pending={pending} error={error} markCompleted={markCompleted}/>}

    </div>
  )
}
