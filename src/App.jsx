import "./App.css";
import About from "./layout/About/About";
import Banner from "./layout/Banner/Banner";
import Header from "./layout/Header/Header";
import Skils from "./layout/Skils/Skils";
function App() {
  return (
      <main className="main">
        <Header/>
        <Banner/>
        <About/>
        <Skils/>
      </main>
  );
}
export default App;
