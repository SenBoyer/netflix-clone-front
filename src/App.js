import "./App.scss";
import Home from "./pages/home/Home";
import React from "react";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import GetIMDB from "./components/movie_db/imdb";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  let user = true;
  return (
    <Router>
      <Routes>
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />
        {user && (
          <>
            <Route path="/movies" element={<Home type={"movie"} />} />
            <Route path="/series" element={<Home type={"series"} />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </Router>
    // <GetIMDB />
  );
}

export default App;
