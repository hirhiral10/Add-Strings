import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    let matchString = /^(\d+(,\d+)*)$/;
    let regExp = /^\/\/[;|:\-/\\]\n/; //to check if the different delimeter is provided
    let delimeter = ",";
    if (regExp.test(input)) {
      delimeter = input[2];
      let expressionString = `^\/\/${delimeter}\\n(\\d+(${delimeter}\\d+)*)$`;
      matchString = new RegExp(expressionString);
    }
    if (matchString.test(input)) {
      setError("");
      const validInput = input.replace(regExp, "");
      const numbers = validInput.split(delimeter);
      const sum = numbers.reduce((a, b) => Number(a) + Number(b), 0);
      setResult(sum);
    } else {
      setError("Enter Valid Input");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
        <div className="text-start fw-semibold mb-3">Sum: {result}</div>
          <div className="mb-3">
            <textarea
              className={`form-control ${error ? "is-invalid" : ""}`}
              id="inputString"
              aria-describedby="validInput"
              value={input}
              placeholder="Enter the numbers"
              onChange={(e) => setInput(e.target.value)}
            />
            <div id="validInput" className="form-text">
              Enter valid input with comma separted or with delimeter Ex: '',
              '1','1,2','//;\n2;3'
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary px-4">
              Add
            </button>
            <button
              type="button"
              className="btn btn-secondary ms-2 px-4"
              onClick={() =>{ 
                setError("")
                setResult("")
                setInput("")}}
            >
              Clear
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
