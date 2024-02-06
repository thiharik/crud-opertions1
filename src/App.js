import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Home";
import Create from "./Create";
import Update from "./Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Update/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
