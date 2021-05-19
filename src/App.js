import React, {Component} from "react";
import './App.css';
import NavBar from './navbar';
import Footer from './footer';
import Movielist from './movielist';
import Moviecomponent from './movie';


function App() {
      return (
        <div className = "app">
            <NavBar />
            <Movielist />
            <Footer />
        </div>
      );
}

export default App;
