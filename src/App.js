import './App.css';
import React, { useState ,useEffect} from 'react';
import { FormControl, Button, InputLabel, Input } from '@material-ui/core';
import  Todo from './Todo'
import db from './firebase'
import firebase from 'firebase'
function App() {
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState([]);


  //when the app loads , we need to listen to the database and fetch new todos after add/removed
  useEffect(()=>{
        //fires when app load
      db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
        setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
      })

  },[])
	const inputChangeHandler = (event) => {
		setInput(event.target.value);
	};
	const onSubmitHandler = (event) => {
		event.preventDefault();
		db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
		setInput('');
	};
	return (
		<div className="App">
			<h1>TODO APP</h1>
			<form onSubmit={onSubmitHandler}>
				<FormControl>
					<InputLabel >✅Add Todo</InputLabel>
					<Input value={input} onChange={inputChangeHandler} />
				</FormControl>
				<Button disabled={!input} type="submit" variant="contained" color="secondary">
					ADD TODO
				</Button>
			</form>

      <ul>
        {todos.map(todo=>(
          <Todo text={todo}/>
        ))}
      </ul>
		</div>
	);
}
export default App;
