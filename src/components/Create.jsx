import React, {useState} from "react";
import useFetch from "./useFetch";

export default function Create() {
  const {data}=useFetch("http://localhost:8000/todo")
  // to get the max id 
  const maxId = data.reduce((max, obj) => (obj.id > max ? obj.id : max), -Infinity);

  const [text, setText] = useState("");
  const [id, setId] = useState(maxId);
  let create_post = async () => {
    let options = {
      method: "POST",
      body: JSON.stringify({
       id:setId(id+1),
       details:text,
       status:false
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
     await fetch(
      "http://localhost:8000/todo",
      options
    );
   
  };
  function handelChange(e) {
    setText(e.target.value);
    console.log(text);
  }
  function handelClick() {
    create_post()
  }
  return (
    <div>
      <input
        type="text"
        className="border border-black"
        value={text}
        onChange={handelChange}
      />
      <button className="border border-black" onClick={handelClick}>
        submit
      </button>
    </div>
  );
}
