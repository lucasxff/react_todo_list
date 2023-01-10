import "./form.css";
import { useState, useEffect } from "react";

function Form() {
  const API = "http://localhost:5000";

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("ta ai corno?");
    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    };

    await fetch(API + "/todo", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setTime("");
    setTitle("");
  };

  return (
    <div className="form">
      <h1>To Do List</h1>
      <p>Minhas Tarefas</p>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Insíra a sua tarefa</label>
        <input
          className="inputForm"
          type="text"
          name="title"
          placeholder="Nome da Tarefa"
          onChange={(e) => setTitle(e.target.value)}
          value={title || ""}
          required
        />
        <label htmlFor="duracao">Duração:</label>
        <input
          className="inputForm"
          type="text"
          name="time"
          placeholder="Duração"
          onChange={(e) => setTime(e.target.value)}
          value={time}
        />
        <input className="btn-form" type="submit" value="enviar" />
      </form>
    </div>
  );
}

export default Form;
