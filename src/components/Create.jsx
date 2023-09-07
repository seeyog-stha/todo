import React, {useState} from "react";


export default function Create(props) {

  const maxId=props.id
  const [text, setText] = useState("");
  const [id, setId] = useState(maxId);
  const addTodo=props.addTodo
  // let create_post = async () => {
  //   let options = {
  //     method: "POST",
  //     body: JSON.stringify({
  //      id:setId(id+1),
  //      details:text,
  //      status:false
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   };
  //    await fetch(
  //     "http://localhost:8000/todo",
  //     options
  //   );
   
  // };
  function handelChange(e) {
    setText(e.target.value);
  }
  function handelClick() {
    addTodo(text)
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
