import React from "react";
import ReactDOM from 'react-dom';

function ticking() {
    const element = (
      <div>
        <h1>some exapmle about react </h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);
  export default ticking