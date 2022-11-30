import React, { useState } from "react";
import "./style.css";

let number = 3;
function Form({ setTodos, todos }) {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  console.log(todos);

  const [todo, setTodo] = useState(initialState);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onChangeHandler3 = (event) => {
    const { name, value } = event.target;
    // const { name:title, value:123 } = event.target;
    // const { name:body, value:1 } = event.target;
    setTodo({ ...todo, [name]: value });
    // setTodo({ ...todo, [title]: 123 });
    // setTodo({ ...todo, [body]: 1 });
  };

  const onChangeHandler = (event) => {
    console.log(event.target);
    // const value = event.target.value;
    setTodo({ ...todo, title: event.target.value });
    // setTitle(value);
  };

  const onChangeHandler2 = (event) => {
    console.log(event.target);
    const value = event.target.value;
    setTodo({ ...todo, body: value });
    setBody(value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // const a = '가 나 다'
    // a.trim() = '가나다'
    // if (todo.title.trim() === "" || todo.body.trim() === "") return;
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(initialState);
    number++;
  };

  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          className="add-input input-body"
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          className="add-input"
          onChange={onChangeHandler2}
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
}

export default Form;
