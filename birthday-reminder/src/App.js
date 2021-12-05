import List from "./components/List";
import { useEffect, useState } from "react";
import { getAllBday } from "./services/bday-services";

function App() {
  const [bdays, setbdays] = useState([]);

  useEffect(() => {
    getAllBday().then((res) => {
      setbdays(res.data);
    });
  }, []);

  return (
    <div className="container">
      <List bdays={bdays} />
    </div>
  );
}

export default App;
