import { useEffect, useState } from "react";
import { Container } from "./components/Container";

function App() {
  const [characters, setCharacters] = useState([
    {
      id: "lowercase",
      text: "Lowercase (a-z)",
      value: "abcdefghijklmnopqrstuvwxyz",
      disabled: true,
      status: true,
    },
    {
      id: "uppercase",
      text: "Uppercase (A-Z)",
      value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      disabled: false,
      status: false,
    },
    {
      id: "numbers",
      text: "Numbers (0-9)",
      value: "0123456789",
      disabled: false,
      status: false,
    },
    {
      id: "symbols",
      text: "Symbols (!-$^+)",
      value: "!$%&|[](){}:;.,*+-#@<>~",
      disabled: false,
      status: false,
    },
  ]);
  const [randomPass, setRandomPass] = useState("");
  const [lengthPass, setLengthPass] = useState(8);
  const [passIndicator, setPassIndicator] = useState("weak");
  const [copyPass, setCopyPass] = useState(false);

  const onCheckedItem = (id) => {
    setCharacters(
      characters.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  const generatePass = () => {
    let staticPass = "";
    let password = "";

    characters.map((item) => {
      if (item.status) {
        staticPass += item.value;
      }
    });

    for (let i = 0, n = staticPass.length; i < lengthPass; ++i) {
      password += staticPass.charAt(Math.floor(Math.random() * n));
      setRandomPass(password);
    }
  };

  const updatePassIndicator = () => {
    setPassIndicator(
      lengthPass <= 8
        ? "bg-red-500 w-[20%]"
        : lengthPass <= 16
        ? "bg-yellow-500 w-[50%]"
        : "bg-green-500 w-[100%]"
    );
  };

  useEffect(() => {
    generatePass();
    updatePassIndicator();
  }, [lengthPass]);

  const onCopyPassword = () => {
    navigator.clipboard.writeText(randomPass);
    setCopyPass(true);

    setTimeout(() => {
      setCopyPass(false);
    }, 1500);
  };

  return (
    <div className="h-[100vh] bg-[#474344] flex justify-center items-center ">
      <Container
        characters={characters}
        randomPass={randomPass}
        lengthPass={lengthPass}
        setLengthPass={setLengthPass}
        passIndicator={passIndicator}
        copyPass={copyPass}
        onCopyPassword={onCopyPassword}
        onCheckedItem={onCheckedItem}
        generatePass={generatePass}
      />
    </div>
  );
}

export default App;
