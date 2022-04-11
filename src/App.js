import react from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [points, setPoints] = react.useState(0);
  const [perClick, setPerClick] = react.useState(1);
  const [perSecond, setPerSecond] = react.useState(0);

  const interval = setInterval(() => {
    if (perSecond <= 0) return;
    setPoints(points + perSecond);
  }, 1000);

  function addToPoints() {
    setPoints(points + perClick);
  }

  function upgradeOne() {
    if (points < 10) return;
    setPoints(points - 10);
    setPerClick(perClick + 1);
  }

  function upgradeTwo() {
    if (points < 25) return;
    setPoints(points - 25);
    setPerSecond(perSecond + 1);
  }

  return (
    <div>
      <h2>points: {points}</h2>
      <button onClick={addToPoints}>Per Click: {perClick}</button>
      <button onClick={upgradeOne}>
        Spend 10 points and increase perClick
      </button>
      <button onClick={upgradeTwo}>Spend 25 pts and increase per second</button>
    </div>
  );
}

export default App;
