import { useState, useEffect } from 'react';
import { BsBookmarkCheck } from 'react-icons/bs';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import { BsTrash } from 'react-icons/bs';

const API = 'http://localhost:5000';

function TodoList(result) {
  const [todos, setTodos] = useState([]);
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    //setLoading(true);
    const loadData = async () => {
      const res = await fetch(API + '/todos')
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err));
      //setLoading(false);
      setTodos(res);
    };
    loadData();
  }, [result]);

  return (
    <div>
      {todos.map(n => (
        <div className="todo" key={n.id}>
          <h3> {n.title}</h3>
          <p> Duração: {n.time}</p>
          <span>
            {' '}
            {!n.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}{' '}
          </span>
          <BsTrash />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
