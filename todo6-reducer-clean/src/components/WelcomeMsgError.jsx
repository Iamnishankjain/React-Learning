import React from 'react';
import { useContext } from 'react';
import { TodoItemsContext } from '../store/Todo_Items-Store';

const WelcomeMsgError = () => {

  const obj = useContext(TodoItemsContext);
  const todoItems=obj.todoItems;
  return (
    todoItems.length===0 && <h1>Enjoy Your Day</h1>
  )
}

export default WelcomeMsgError;
