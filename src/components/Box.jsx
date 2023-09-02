import React from 'react'

export default function Box(props) {
    const box=props.box
    let update_post = async (e) => {
        let options = {
          method: "POST",
          body: JSON.stringify({
           id:e.target.id,
           details:e.target.details,
           status:true
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
         await fetch(
          "http://localhost:8000/todo",
          options
        );
         }  
   
    const handelChange=(e)=>{
        console.log("hi")
        update_post(e)
    }
  return (
    <div>
     {box.map((obj)=>(
        <div key={obj.id}>
            
            <label htmlFor={obj.id}></label>
            <input type="checkbox" name="" id={obj.id} checked={obj.status?"checked" : ""} onChange={handelChange} className='inline'/>
            <p className='inline'>{obj.details}</p>
        </div>
     ))}
    </div>
  )
}
