import { useState } from "react";

function App() {
  const [number, setnumber] = useState(0);

  const incrementByOne = () => {
    setnumber(number + 1);
  };

  return (
    <div className="container">
      <button onClick={incrementByOne}>{number}</button>
    </div>
  );
}

export default App;
