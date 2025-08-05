// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs';
import FAQ from './Components/FAQ/FAQ';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <AboutUs/>
      <FAQ/>
      <Contact/>
    </div>
  );
}

export default App;
