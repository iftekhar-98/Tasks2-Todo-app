import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(addTodo(input.value));
      input.value = '';
    }}>
      <div class="input-group mb-3">
      <input
        type="text"
        ref={node => (input = node)}
        placeholder="What I have to do ?"
      />
      <div class="input-group-append">
      <button type="submit">+</button>
      </div>
      </div>
    </form>
    </div>
  );
};

export default connect()(AddTodo);