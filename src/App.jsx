import { Container } from "./components/Container";

const characters = [
  {
    id: "lowercase",
    text: "Lowercase (a-z)",
    value: "abcdefghijklmnopqrstuvwxyz",
    disabled: true,
  },
  {
    id: "uppercase",
    text: "Uppercase (A-Z)",
    value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    disabled: false,
  },
  {
    id: "numbers",
    text: "Numbers (0-9)",
    value: "0123456789",
    disabled: false,
  },
  {
    id: "symbols",
    text: "Symbols (!-$^+)",
    value: "!$%&|[](){}:;.,*+-#@<>~",
    disabled: false,
  },
];

function App() {
  return (
    <div className="h-[100vh] bg-[#474344] flex justify-center items-center ">
      <Container characters={characters} />
    </div>
  );
}

export default App;
