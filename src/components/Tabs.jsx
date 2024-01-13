export default function Tabs({ children, buttons, buttonsContainer }) {
  let ButtonsContainer = buttonsContainer; // ハナから大文字変数を props で受け取っても良い
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
