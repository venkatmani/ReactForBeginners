import React from 'react';
import ReactDOM from 'react-dom';
function Person() {
  return (
    <div class="person">
      <h1>Venkat</h1>
      <p>Your Age: 28</p>
    </div>
  );
}

ReactDOM.render(<Person />, document.getElementById('#p1'));
