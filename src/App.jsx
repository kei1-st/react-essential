import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click the button");

  let tabContent = "Please click the button";

  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => clickHandler("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => clickHandler("jsx")}>JSX</TabButton>
            <TabButton onClick={() => clickHandler("props")}>Props</TabButton>
            <TabButton onClick={() => clickHandler("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3></h3>
            <p></p>
            <pre>
              <code></code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
