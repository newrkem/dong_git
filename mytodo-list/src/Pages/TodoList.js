import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import Header from "../Components/Header/Header";
import Form from "../Components/Form/Form";
import List from "../Components/List/List";

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "복습 복습!!!",
      isDone: false,
    },
    {
      id: 2,
      title: "자바스크립트 보강",
      body: "요놈도 예복습!!!",
      isDone: true,
    },
  ]);
  return (
    <Layout>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
}

export default TodoList;
