import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="Sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This open-sourced project was coded by {""}
            <a href="https://github.com/ManonSella/dictionary-app">
              Manon Sella
            </a>{" "}
            and is hosted on {""}
            <a href="https://flourishing-croquembouche-b3d178.netlify.app/">
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
