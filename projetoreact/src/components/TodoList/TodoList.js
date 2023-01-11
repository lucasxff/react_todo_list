import { useState, useEffect } from "react";

const API = "http://localhost:5000";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      const res = await fetch(API + "/todos")
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));
      setLoading(false);
      setTodos(res);
    };
    loadData();
  }, []);

  return (
    <div>
      {console.log(todos.map((n) => n))}
      {todos.map((n) => (
        <div className="todo" key={n.id}>
          <span> {n.title}</span>
          <span> - {n.time}</span>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
