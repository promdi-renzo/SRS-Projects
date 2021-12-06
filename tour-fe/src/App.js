import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import { getAllTour } from "./service/tour-servce";

function App() {
  const [tours, settours] = useState([]);

  const getAll = () => {
    getAllTour().then((res) => {
      console.log(res.data);
      settours(res.data);
    });
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="container">
      <Cards tours={tours} getAll={getAll} />;
    </div>
  );
}

export default App;
