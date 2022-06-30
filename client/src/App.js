import logo from './logo.svg';
import Login from './pages/login/Login';
import Navbar from './components/navbar/Navbar';
import News from './pages/news/News';
import Home from './components/navbar/home/Home';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
    <Navbar />
    <Home/>
    <News />
    <Login />
    <Footer />

    </div>
  );
}

export default App;
