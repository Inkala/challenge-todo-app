import React from 'react';

const NewTodo = props => {
  const { title, body, editing } = props;
  const submitFunction = editing ? props.handleEdit : props.handleSubmit;
  return (
    <form onSubmit={submitFunction}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          autoFocus
          type="text"
          name="title"
          placeholder="Add To Do..."
          value={title}
          onChange={props.handleChange}
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          name="body"
          placeholder="What is it about?"
          value={body}
          onChange={props.handleChange}
        />
      </div>
      <button type="submit" className="submit-btn">
        {editing ? 'Edit Todo' : 'Add ToDo'}
      </button>
    </form>
  );
};

export default NewTodo;
