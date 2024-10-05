import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "From 7pm to 10pm",
    completed: false
  }]);

  return (
    <div>
      {/* {JSON.stringify(todos)} */}
      {/* <Todo title={todos[0].title} description={todos[0].description} /> */}
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;

