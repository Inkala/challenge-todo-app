import React, { Component } from 'react';

import TodoList from './Components/TodoList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To Do App</h1>
        </header>
        <main>
          <TodoList />
        </main>
      </div>
    );
  }
}

export default App;
