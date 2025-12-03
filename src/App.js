import "./styles.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <main>
        <Dictionary />
      </main>
      <footer>
        <small>
          This project was coded by{" "}
          <a href="https://github.com/Aaliyah-Fransman" target="_blank">
            Aaliyah Fransman
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Aaliyah-Fransman/My-Weather-App-Project"
            target="_blank"
          >
            on GitHub
          </a>{" "}
          and{" "}
          <a href="https://theskycast.netlify.app/?#" target="_blank">
            hosted on Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}
