import React from "react";
import { Counter } from "./features/counter/Counter";
import { PostsList } from "./features/posts/PostsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/dist";
import "./App.css";
import { AddPostForm } from "./features/posts/AddPostForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<PostsList/>} />
          <Route path='/add-posts' element={<AddPostForm/>} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
