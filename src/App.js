import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <div class="mb-3">
            <label for="inputString" className="form-label">
              Enter String
            </label>
            <input
              type="text"
              className="form-control"
              id="inputString"
              aria-describedby="validInput"
            />
            <div id="validInput" class="form-text">
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
