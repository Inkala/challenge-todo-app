import axios from 'axios';

class TodoService {
  constructor() {
    this.todos = axios.create({
      baseURL: 'http://localhost:4000/api/v1/todos'
    });
  }

  getAllTodos() {
    return this.todos.get('').then(res => res);
  }

  createTodo(newTodo) {
    return this.todos.post('', newTodo).then(res => res);
  }

  updateTodo(id, updatedTodo) {
    return this.todos.put(`/${id}`, updatedTodo).then(res => res);
  }

  deleteTodo(id) {
    return this.todos.delete(`/${id}`).then(res => res);
  }
}

const todoService = new TodoService();

export default todoService;
