import React, { Component } from 'react';
import stylesh from './App.module.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = (buttonCss) => {
    
    
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
    
  }
  
  render () {
    /*const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };*/

    let persons = null;
    const classes = [];
    let ToggleText="Toggle Person";

    const buttonCss = [];

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
          {/*this.state.persons.map( ( person, index ) => {
            return <Person
              click={() => this.deletePersonHandler( index )}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={( event ) => this.nameChangedHandler( event, person.id )} />
          } )*/}
        </div>
      );
      buttonCss.pop();
      buttonCss.push(stylesh.buttonChange);
   }

    
    buttonCss.push( stylesh.button );
    if ( this.state.persons.length <= 2 ) {
      classes.push( stylesh.red ); // classes = ['red']
    }
    if ( this.state.persons.length <= 1 ) {
      classes.push( stylesh.bold ); // classes = ['red', 'bold']
    }
    if(this.state.persons.length === 0 ){
      buttonCss.pop();
      ToggleText = "Toggle person Empty!!";
      buttonCss.push( stylesh.buttonChange );
    }

    return (
        <div className={stylesh.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join( ' ' )}>This is really working!</p>
          <button
            className={buttonCss.join(' ')}
            onClick={() => this.togglePersonsHandler(buttonCss)}>{ToggleText}</button>
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
