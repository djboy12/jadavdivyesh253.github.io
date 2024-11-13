import React from "react";
import {TodoItem} from "./TodoItem";

const Todos = (props) => {
  let MyStyle = {
    minHeight: "100vh",
    margin: "40px auto"
  }
  return (
    <div className="container my-3" style={MyStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length===0? "No Todos Display":  
      props.todos.map((todo)=>{
        return (
          <>
           <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
          </>
        )

      })
    }
    </div>
  );
};

export default Todos;
