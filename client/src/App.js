import About from "./component/about/About";
import Home from "./component/home/Home";
import NavbarEl from "./component/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <NavbarEl />
      <Home />
      <About />
    </div>
  );
}

export default App;
