import React from 'react';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from '../components/Footer';

const TodoApp = () => (
  <section className="todo-app">
    <h1>"Stop wishing! Start Doing!"</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </section>
);

export default TodoApp;