import "./App.css";
import DynamicList from "./dinamicList/DynamicList";
import Form from "./dinamicList/Form";
import { ListProvider } from "./dinamicList/ListContext";
import CounterClassic from "./redux/CounterClassic";
import CounterModern from "./redux/CounterModern";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => (
  <div>
    <CounterClassic />
    <CounterModern />
  </div>
);
const About = () => <DynamicList />;

const App = () => { 

  return (
    <ListProvider>
      <Router>
        <h1>Router Navs</h1>
        <nav>
          <Link to="/" style={{ marginRight: 20 }}>
            Redux
          </Link>
          <Link to="/about" style={{ marginRight: 20 }}>
            Context
          </Link>
          <Link to="/protected" style={{ marginRight: 20 }}>
            Form
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/protected" element={<Form />} />
        </Routes>
      </Router>
    </ListProvider>
  );
};

export default App;
