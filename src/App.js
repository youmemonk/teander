import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route
            path="/chat"
            element={[<Header backButton="/" />, <Chats />]}
          />
          {/* <Route path="/" element={((<TinderCards />), (<SwipeButtons />))} /> */}
          <Route
            path="/"
            element={[<Header />, <TinderCards />, <SwipeButtons />]}
          />
        </Routes>
      </Router>

      {/* Chat Screen */}
      {/* Individual Chat Screen */}
    </div>
  );
}

export default App;
