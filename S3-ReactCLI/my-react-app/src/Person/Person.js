import React from 'react';
//simple person class
/* 
const person = () => {
  return <p>This is person paragraph</p>;
};*/

//person class with parameters
const person = props => {
  return (
    <div>
      <p>
        This is {props.name} and he is {props.age} old
      </p>
      <p>{props.children}</p>
    </div>
  );
};
export default person;
