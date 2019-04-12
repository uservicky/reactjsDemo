import React from 'react';
import personCss from './Person.module.css';

const person = ( props ) => {
    return (
        <div className={personCss.Person122}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed}/>
            <button onClick={props.click}> delete</button>
        </div>
    )
};

export default person;