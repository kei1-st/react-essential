import { useState } from "react";

import TabButton from "./TabButton/TabButton.jsx";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div class="tab">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  const buttons = (
    <>
      <TabButton
        isSelected={selectedTopic === "components"}
        onClick={() => clickHandler("components")}
      >
        Components
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "jsx"}
        onClick={() => clickHandler("jsx")}
      >
        JSX
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "props"}
        onClick={() => clickHandler("props")}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "state"}
        onClick={() => clickHandler("state")}
      >
        State
      </TabButton>
    </>
  );

  return (
    <Section title="Examples" id="examples">
      <Tabs buttonsContainer="menu" buttons={buttons}>
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default Examples;
