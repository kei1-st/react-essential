function TabButton(props) {
  // or ({children})

  // function handleClick() {
  //   console.log("Hello World!");
  // }

  // vanilla JS style　（ imperative ）
  // document.querySelector("button").addEventListener("click", () => {});

  return (
    <li>
      <button onClick={props.onClick}>{props.children}</button>
    </li>
  );
}

export default TabButton;
