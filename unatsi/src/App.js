//components
import Route from "./components/Route";
import Header from "./components/Header";
//pages
import Home from "./components/pages/Home";
//styling
import "./scss/App.scss";

function App() {
  return (
    <main className="app">
      <Header />
      <Route path="/">
        <Home />
      </Route>
    </main>
  );
}

export default App;
