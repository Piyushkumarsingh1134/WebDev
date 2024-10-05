// import React, { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';




//   function updateTitle() {
//     setTitle("my name is " + Math.random());
//   }

//   return (
//     <>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title} />
//       <Header title="harkitrat" />
//     </>
//   );
// }
// function Header({ title }) {
//   return <div>{title}</div>;
// // }
// const Header=React.memo(function Header({title}){
//   return <div>{title}</div>;
// })

// function Todo(title,description){
//   return <>
//       <h1>{title}</h1>
//       <h2> {description}</h2>
//   </>
    
import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to gym",
      description: "Work out at the gym"
    },
    {
      id: 2,
      title: "Buy groceries",
      description: "Get vegetables and fruits"
    }
  ]);

  function addTodo() {
    const newTodo = {
      id: todos.length + 1,
      title: `New Todo ${todos.length + 1}`,
      description: `Description for todo ${todos.length + 1}`
    };
    const newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map(todo => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </>
  );
}

export default App;



