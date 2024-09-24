import { useState } from "react"; 
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [input,setInput]=useState("")
  const [error,setError]=useState("")

  const onSubmit=(e)=>{
    e.preventDefault()
    let matchString=/^(\d+(,\d+)*)$/
    let regExp=/^\/\/[;|:\-/\\]/ //to check if the different delimeter is provided
    if(regExp.test(input)){
      let delimeter=input[2]
      let expressionString=`^\/\/${delimeter}(\\d+(${delimeter}\\d+)*)$`
      matchString=new RegExp(expressionString)
    }
    if(matchString.test(input)){
      setError("")
    }else{
      setError('Enter Valid Input')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="inputString" className="form-label">
              Enter String
            </label>
            <input
              type="text"
              className={`form-control ${error?"is-invalid":""}`}
              id="inputString"
              aria-describedby="validInput"
              value={input}
              onChange={(e)=>setInput(e.target.value)}
            />
            <div id="validInput" className="form-text">
              Enter valid input with comma separted or with delimeter
            </div>
          </div>
          <button type="submit" className="btn btn-primary px-4">Add</button>
        </form>
      </header>
    </div>
  );
}

export default App;
