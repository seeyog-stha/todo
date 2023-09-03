import React from 'react'

export default function Box(props) {
    const box=props.box
    let update_post = async (e) => {
        // console.log(e.target.id,e.target.name)
        let idd=e.target.id
        console.log(idd)
        let options = {
          method: "PUT",
          body: JSON.stringify({
           id:idd,
           details:e.target.name,
           status:true
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
         await fetch(
         ` http://localhost:8000/todo/`+idd,
          options
        );
         }  
   
    const handelChange=(e)=>{
        // console.log("hi")
        update_post(e)
    }
  return (
    <div>
     {box.map((obj)=>(
        <div key={obj.id}>
            
            <label htmlFor={obj.id}>

            <input type="checkbox" id={obj.id} checked={obj.status?"checked" : ""} onChange={handelChange} className='inline' name={obj.details}/>
            <p className='inline'>{obj.details}</p>
            </label>
        </div>
     ))}
    </div>
  )
}
