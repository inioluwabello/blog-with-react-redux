import React from "react";
import { Counter } from "./features/counter/Counter";
import { PostsList } from "./features/posts/PostsList";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom/dist";
import "./App.css";
import { AddPostForm } from "./features/posts/AddPostForm";
import { SinglePostPage } from "./features/posts/SinglePostPage";
import Navbar from "./app/Navbar";
import { EditPostForm } from "./features/posts/EditPostForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <div className="container">
                  <div className="space-between even-spread">
                    <AddPostForm />
                    <PostsList />
                  </div>
                </div>
              </React.Fragment>
            }
          />
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
