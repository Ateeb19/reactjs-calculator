import React, { useState } from "react";
import "./cal.css";
const App = () =>{
  const [input, setinput] = useState('');
  const equal = () =>{
    try{
      setinput(eval(input).toString());
    }catch(error){
      setinput('Error');
    }
  }
  return(
    <div>
      <div className="container-sm">
        <div className="mn">
          <div className="row mt-1">
            <div className="col-12">
              <div className="display">
              <h2>{input}</h2>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12">
              <div className="button">
                <button className="btn btn-primary" type="button" value='7' onClick={e => setinput(input + e.target.value)}>7</button>
                <button className="btn btn-primary" type="button" value='8' onClick={e => setinput(input + e.target.value)}>8</button>
                <button className="btn btn-primary" type="button" value='9' onClick={e => setinput(input + e.target.value)}>9</button>
                <button className="btn btn-primary" type="button" value='Del' onClick={e => setinput(input.slice(0, -1))}>Del</button>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12">
              <div className="button">
                <button className="btn btn-primary" type="button" value='4' onClick={e => setinput(input + e.target.value)}>4</button>
                <button className="btn btn-primary" type="button" value='5' onClick={e => setinput(input + e.target.value)}>5</button>
                <button className="btn btn-primary" type="button" value='6' onClick={e => setinput(input + e.target.value)}>6</button>
                <button className="btn btn-primary" type="button" value='+' onClick={e => setinput(input + e.target.value)}>+</button>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12">
              <div className="button">
                <button className="btn btn-primary" type="button" value='1' onClick={e => setinput(input + e.target.value)}>1</button>
                <button className="btn btn-primary" type="button" value='2' onClick={e => setinput(input + e.target.value)}>2</button>
                <button className="btn btn-primary" type="button" value='3' onClick={e => setinput(input + e.target.value)}>3</button>
                <button className="btn btn-primary" type="button" value='-' onClick={e => setinput(input + e.target.value)}>-</button>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12">
              <div className="button">
                <button className="btn btn-primary" type="button" value='.' onClick={e => setinput(input + e.target.value)}>.</button>
                <button className="btn btn-primary" type="button" value='0' onClick={e => setinput(input + e.target.value)}>0</button>
                <button className="btn btn-primary" type="button" value='/' onClick={e => setinput(input + e.target.value)}>/</button>
                <button className="btn btn-primary" type="button" value='*' onClick={e => setinput(input + e.target.value)}>*</button>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12">
              <div className="button">
                <button className="btn btn-primary btn-last" type="button" onClick={e => setinput('')}>Reset</button>
                <button className="btn btn-primary btn-last" type="button" onClick={equal}>=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;