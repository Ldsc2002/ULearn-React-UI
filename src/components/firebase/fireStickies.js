
import React, { useState, useEffect } from 'react';

function App() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
  
    useEffect(() => { 
      db.collection('todos').onSnapshot(snapshot => {
        setTodos(snapshot.docs.map(doc => ({id:doc.id, todo:doc.data().todo})))
      })
    }, []);
  
    const createTodo = (e) => {
      e.preventDefault();
      db.collection('todos').add({
        todo: input
      });
      setInput('');
    };