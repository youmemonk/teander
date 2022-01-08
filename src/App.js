import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Routes>
          {/* <Route path="/chat" element={<h1>Chat Page</h1>} /> */}
          <Route path='/' element={<TinderCards />} />
        </Routes>
      </Router>

      {/* Tinder Card */}
      {/* Buttons below Tinder Card */}

      {/* Chat Screen */}
      {/* Individual Chat Screen */}
    </div>
  );
}

export default App;
