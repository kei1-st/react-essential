function TabButton({ children, isSelected, ...props }) {
  // or ({children})

  // function handleClick() {
  //   console.log("Hello World!");
  // }

  // vanilla JS style　（ imperative ）
  // document.querySelector("button").addEventListener("click", () => {});

  return (
    <li>
      {
        // <button className={isSelected ? "active" : undefined} onClick={onClick}>
        // {...props} が onClick={onClick} に置き換わる
        // 左辺が onClick でないと動かないので、そうでない場合は TabButton の呼び出し時の prop 変更せよ
      }
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
