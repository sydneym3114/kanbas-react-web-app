import React, { useState, useEffect } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
function WorkingWithArrays() {
    const API = `${API_BASE}/a5/todos`;
    const [todo, setTodo] = useState({
        id: 1, 
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const [todos, setTodos] = useState<any[]>([]);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    useEffect(() => {
        fetchTodos();
    }, []);
    const removeTodo = async (todo:any) => {
        const response = await axios
          .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };
    const fetchTodoById = async (id:number) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };
    const deleteTodo = async (todo:any) => {
        const response = await axios.delete(`${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
    };
    const updateTodo = async () => {
        const response = await axios.put(`${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    };
    
    
    return (
      <div>
        <h3>Working with Arrays</h3>
        <input className="input-group" value={todo.id} type="number"
                onChange={(e) => setTodo({ ...todo,
                id: parseInt(e.target.value) })}/>
        <input className="input-group" type="text" value={todo.title}
            onChange={(e) => setTodo({
            ...todo, title: e.target.value })}/>
        <input className="input-group" type="text" value={todo.description}
                onChange={(e) => setTodo({
                ...todo, description: e.target.value })}/>
        <label  className="form-control">
            <input type="checkbox" checked={todo.completed}
                onChange={() => setTodo({ ...todo,
                    completed: !todo.completed })} />
                    Completed
        </label>
        <button className="btn btn-primary" onClick={createTodo} >
            Create Todo
        </button>
        <button className="btn btn-success" onClick={updateTitle} >
            Update Title
        </button>
        <textarea className="input-group" value={todo.description} 
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })} />
      <input className="input-group" value={todo.due} type="date"
        onChange={(e) => setTodo({
          ...todo, due: e.target.value })} />
      <label className="form-control">
        <input checked={todo.completed} type="checkbox"
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })} />
        Completed
      </label>
      <button className="btn btn-warning" onClick={postTodo}> Post Todo </button>
      <button onClick={updateTodo}>
        Update Todo
      </button>

        <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            <input checked={todo.completed}
              type="checkbox" readOnly />Completed<br/>
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            <button className="btn btn-warning" onClick={() => fetchTodoById(todo.id)} >
                Edit
            </button>
            <button className="btn btn-danger" onClick={() => removeTodo(todo)} >
                Remove
            </button>
            {todo.title}
            <button onClick={() => deleteTodo(todo)} className="btn btn-danger float-end ms-2">
                Delete
            </button>
          </li>
        ))}
        </ul>
        
        <h4>Retrieving Arrays</h4>
        <a className="btn btn-primary" href={API}>
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
        
        <a className="btn btn-primary" href={`${API}/${todo.id}`}>
            Get Todo by ID
        </a>
        <h3>Filtering Array Items</h3>
        <a className="btn btn-primary" href={`${API}?completed=true`}>
            Get Completed Todos
        </a>
        <h3>Creating new Items in an Array</h3>
        <a className="btn btn-primary" href={`${API}/create`}>
            Create Todo
        </a>
        <h3>Deleting from an Array</h3>
        <a className="btn btn-primary" href={`${API}/${todo.id}/delete`}>
            Delete Todo with ID = {todo.id}
        </a>
        
        <h3>Updating an Item in an Array</h3>
        <a className="btn btn-primary" href={`${API}/${todo.id}/title/${todo.title}`} >
            Update Title to {todo.title}
        </a>
        <h4>Updating Todo Description</h4>
        <a className="btn btn-primary" href={`${API}/${todo.id}/description/${todo.description}`} >
            Update Description to {todo.description}
        </a>
        <h4>Updating Todo Completion</h4>
        <a className="btn btn-primary" href={`${API}/${todo.id}/completed/${todo.completed}`} >
            Update Completion to {todo.completed.toString()}
        </a>

      </div>
    );
  }
  export default WorkingWithArrays;