import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by {""}
            <a href="https://github.com/ManonSella/dictionary-app">
              Manon Sella
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
