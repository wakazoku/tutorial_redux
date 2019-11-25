import React from "react";
import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibilityTodoList from "./containers/VisibileTodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibilityTodoList />
      <Footer />
    </div>
  );
}

export default App;
