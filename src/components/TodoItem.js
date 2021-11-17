import React from "react";

function TodoItem(props) {
  const todoText = {
    marginLeft: "0.5em",
    fontSize: "1.5em",
    color: "#525252",
    fontWeight: "600",
  };

  const completedStyle = {
    marginLeft: "0.5em",
    fontSize: "1.5em",
    color: "#525252",
    fontWeight: "600",
    textDecoration: "line-through",
    textDecorationColor: "red",
  };

  return (
    <div className="todo-item">
      <div className="todo-information">
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => props.handleChange(props.todo.id)}
        />
        <span style={props.todo.completed ? completedStyle : todoText}>
          {props.todo.text}
        </span>
      </div>
    </div>
  );
}

export default TodoItem;
