
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
       
      <header className="App-header">
 <h1>Dictionary App</h1>
</header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer>
          <small>
            This project was coded by{" "}
            <a href="https://github.com/Aaliyah-Fransman" target="_blank" rel="noopener noreferrer">
              Aaliyah Fransman
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/Aaliyah-Fransman/My-Weather-App-Project"
              target="_blank"
              rel="noopener noreferrer"
            >
              on GitHub
            </a>{" "}
            and{" "}
            <a href="https://theskycast.netlify.app/?#" target="_blank" rel="noopener noreferrer">
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
