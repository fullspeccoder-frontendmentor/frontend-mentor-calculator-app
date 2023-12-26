import { useState } from "react";
import "./App.css";

const KEYS = [
  "7",
  "8",
  "9",
  "DEL",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "/",
  "x",
  "RESET",
  "=",
];

function App() {
  const [currentTheme, setCurrentTheme] = useState("ThemeOne");
  const [number, setNumber] = useState(0);

  const handleToggleTheme = (theme) => {
    const availableThemes = ["ThemeOne", "ThemeTwo", "ThemeThree"];
    if (!availableThemes.includes(theme)) return alert("Theme Not Available");
    setCurrentTheme(theme);
  };

  return (
    <div className={`App ${currentTheme}`}>
      <Header>
        <h1>calc</h1>
        <ThemeToggler onToggleTheme={handleToggleTheme} />
      </Header>
      <DisplayArea number={number} />
      <Keys />
    </div>
  );
}

const Header = ({ children }) => {
  return <header className="Header">{children}</header>;
};

const ThemeToggler = ({ onToggleTheme }) => {
  return (
    <aside className="ThemeToggler">
      <span>THEME</span>
      <div className="theme-numbers">
        <span>
          <span onClick={() => onToggleTheme("ThemeOne")}>1</span>
          <span onClick={() => onToggleTheme("ThemeTwo")}>2</span>
          <span onClick={() => onToggleTheme("ThemeThree")}>3</span>
        </span>
        <div className="slider">
          <span className="slider-btn"></span>
        </div>
      </div>
    </aside>
  );
};

const DisplayArea = ({ number }) => {
  return <section className="DisplayArea">{number}</section>;
};

const Keys = () => {
  const [keyPressed, setKeyPressed] = useState("");

  const handleClick = (e) => {
    setKeyPressed(e.target.innerHTML);
  };

  return (
    <main className="Keys">
      {KEYS.map((keyChar, ind) => (
        <button key={ind} onClick={handleClick}>
          {keyChar}
        </button>
      ))}
    </main>
  );
};

export default App;
