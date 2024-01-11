import reactImg from "./assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const desctiprion = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desctiprion} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts() {
  return(
    <li>
      <img src="..." alt="..." />
      <h3>TITLE</h3>
      <p>DESCRIPTION</p>
    </li>;
  )
}

function App() {
  return (
    <div>
      <Header />
      
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;