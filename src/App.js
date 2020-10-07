import React from 'react';
import './App.css';
import GithubAPI from "./Components/GithubAPI";

function App() {
    return (
        <div className="App">
            <nav className="navbar-dark bg-dark text-white">
                <a href="/" className="navbar-brand">Github User Search</a>
            </nav>
            <GithubAPI/>
        </div>
    );
}

export default App;
