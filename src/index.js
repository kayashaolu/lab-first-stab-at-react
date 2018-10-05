import React from "react";
import ReactDOM from "react-dom";

class Add extends React.Component {
  // implement this class
  render() {
    return (
      <span>This is a placeholder for the Add Component</span>
    );
  }
}

class Subtract extends React.Component {
  // implement this class
  render() {
    return (
      <span>This is a placeholder for the Subtract Component</span>
    );
  }
}

class App extends React.Component {
  // This component contains your Add and Subtract components. This is the entirety of
  // your application
  render() {
   return (
     <ul>
      <li><Add op1="5" op2="9" /></li>
      <li><Add op1="1" op2="4" /></li>
      <li><Subtract op1="2" op2="3" /></li>
      <li><Subtract op1="5" op2="10" /></li>
    </ul>
   );
 }
}

// Render the App component, which contains instances of your Add and Subtract Components
ReactDOM.render(
  <App />,
  document.getElementById('root'));
