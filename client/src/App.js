import logo from "./logo.svg";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import News from "./pages/news/News";
import Home from "./components/navbar/home/Home";
import Footer from "./components/footer/Footer";
import Facts from "./components/facts/Facts";
import Register from "./pages/register/register";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <News />
 
      <Facts />
      <Register />
      {/* <Login /> */}
      <Footer />
    </div>
  );
}

export default App;
