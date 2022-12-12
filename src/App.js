import "./reset.css";
import "./App.css";

import Exercises from "./components/exercises/Exercises.tsx";
import Heading from "./components/heading/Heading.tsx";
import Hero from "./components/hero/Hero.tsx";
import Series from "./components/series/Series.tsx";
import WorkProgram from "./components/workProgram/WorkProgram.tsx";

function App() {
  return (
    <div className="body-wrapper">
      <Heading />
      <main>
        <Hero />
        <Exercises />
        <WorkProgram />
        <Series />
      </main>
    </div>
  );
}

export default App;
