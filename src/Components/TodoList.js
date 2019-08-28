import React, { Component } from 'react';

import todoService from '../services/todo-service';

import NewTodo from './NewTodo';

class TodoList extends Component {
  state = {
    title: '',
    body: '',
    todos: [],
    editing: false,
    editId: ''
  };

  componentDidMount() {
    todoService.getAllTodos().then(res => {
      this.setState({ todos: res.data });
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, body, todos } = this.state;
    const todoCopy = [...todos];
    const newTodo = { title, body };
    todoService
      .createTodo(newTodo)
      .then(res => {
        todoCopy.push(res.data);
        this.setState({
          title: '',
          body: '',
          todos: todoCopy
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleDelete = id => {
    todoService.deleteTodo(id).then(res => {
      const filteredTodos = this.state.todos.filter(todo => {
        return todo._id !== id;
      });
      this.setState({ todos: filteredTodos });
    });
  };

  handleEditFiends = todo => {
    this.setState({
      title: todo.title,
      body: todo.body,
      editing: true,
      editId: todo._id
    });
  }
  
  handleEdit = event => {
    event.preventDefault();
    console.log("Handle edit");
  }


  render() {
    const { title, body, todos, editing } = this.state;
    return (
      <section className="todo-list">
        <NewTodo
          title={title}
          body={body}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleEdit={this.handleEdit}
          editing={editing}
        />
        {todos.length
          ? todos.map(todo => (
              <article key={todo._id}>
                <section className="item-content">
                  <h2>{todo.title}</h2>
                  <p>{todo.body}</p>
                </section>
                <section className="item-btns">
                  <span 
                    onClick={(event) => {
                      this.handleEditFiends(todo);
                    }}
                    role="img"
                    aria-label="edit"
                  >
                    📝
                  </span>
                  <span
                    onClick={() => {
                      this.handleDelete(todo._id);
                    }}
                    role="img"
                    aria-label="delete"
                  >
                    🗑 ️
                  </span>
                </section>
              </article>
            ))
          : null}
      </section>
    );
  }
}

export default TodoList;
