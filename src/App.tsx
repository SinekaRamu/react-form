import "./App.css";
import { useState } from "react";
import { Button, Input } from "./Component";

function App() {
  const intialValues = {
    firstName: "",
    secondName: "",
    age: 0,
  };
  const [input, setInput] = useState(intialValues);
  function handleChange{(e)=> 
    setInput(...input,)[e.target.name]:else.target.value};
  return (
    <div className="App">
      <header className="App-header">
        <Input
          name="firstName"
          type="text"
          label="Enter your First Name"
          placeholder="your First name"
          onChange={handleChange}
        />
        <Input
          name="secondName"
          type="text"
          label="Enter your Second Name"
          placeholder="your Second name"
          onChange={handleChange}
        />
        <Input
          name="Your Age"
          type="number"
          label="Enter your Age"
          placeholder="your age"
          onChange={handleChange}
        />

        <Button />
      </header>
    </div>
  );
}

export default App;
