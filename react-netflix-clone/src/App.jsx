import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import requests from "./request";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLarge={true}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Horror Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Romance Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Documentary" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
