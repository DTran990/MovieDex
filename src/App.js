import React, {Component} from "react";
import './App.css';
import NavBar from './navbar';
import Footer from './footer';
import Movie from './movies';
import { render } from "react-dom";



function App() {
      return (
        <div className = "app">
            <NavBar />
            <div>
              
            </div>
            <Footer />
        </div>
      );
}

export default App;
