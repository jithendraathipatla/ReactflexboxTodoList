import React, { useState, useEffect } from "react";
import "./form.css";

const Form = () => {
  const [state, setstate] = useState("");
  const [use, setuse] = useState([]);

  function value(e) {
    var x = document.forms["firstform"]["ref"].value;
    if(x !== ""){
        e.preventDefault();
        setstate([x]);
        setuse([x, ...use]);
        var frm = document.getElementsByName("firstform")[0];
        frm.reset();
    }
    else{
        alert("plese provide some value");
        e.preventDefault();
    }
   
  }

  const show = () => use.map((item, i) => <li key={i}> {item} </li>)

  return (
    <div>
      <div className="container">
        <h1> To do -list with the flex - box </h1>
        <div className="container__content">
          <form name="firstform" onSubmit={value}>
            <input type="text" placeholder="add todo list" name="ref" />
            <button type="submit" value="submit">
              
              Add
            </button>
          </form>
        </div>
      </div>
      <h> Added List is </h>
      <div>
        <ul> {show()} </ul>
      </div>
    </div>
  );
}

export default Form;
