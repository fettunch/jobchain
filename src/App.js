import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {
state = {
   persons: []
 }

 componentDidMount() {
   axios.get('http://35.204.8.170:8080/api/org.acme.sample.Applicant')
     .then(res => {
       const persons = res.data;
       this.setState({ persons });
     })
 }

 


 render() {
   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to React</h1>
       </header>
       <p className="App-intro">
         To get started, edit <code>src/App.js</code> and save to reload.
       </p>
         <ul>
       { this.state.persons.map(person => <li>{person.name}</li>)}
     </ul>
     </div>
   );
 }
}

export default App;