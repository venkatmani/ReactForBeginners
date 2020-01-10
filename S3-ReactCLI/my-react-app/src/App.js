import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Clock from './Clock/clock';
import Games from './Game/Game';

class App extends Component {
  names = ['name1', 'name2', 'name3'];
  state = {
    persons1: [
      { name: 'venkat', age: 20 },
      { name: 'mani', age: 25 },
      { name: 'pranitha', age: 1 }
    ],
    otherProps: 'xxx'
  };

  ChangeName = () => {
    this.setState({
      persons1: [
        { name: this.names[Math.floor(Math.random() * this.names.length)] }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <Clock />
        <h1>This is new react app</h1>
        <div>
          <button onClick={this.ChangeName}>Change Name</button>
        </div>
        <Person name={this.state.persons1[0].name} age="30" />
        <Person name="mani" age="26" isWise="true">
          Hobbies:Surfing and Thinking
        </Person>
        <Person name="pranitha" age="2" />
        <Games name="formula1" />
      </div>
    );
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement(
    //     'h1',
    //     null,
    //     'This is new react app without transpilers'
    //   )
    // );
  }
}

export default App;
