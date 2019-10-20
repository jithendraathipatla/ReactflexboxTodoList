import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from "./form";
// import "./App.sass";

const App = () => {
    return (
        <div>
          <ToDo/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

