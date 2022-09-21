import './App.css';
import Clients from './Landing_сomponent/Clients';
import Footer from './Landing_сomponent/Footer';
import Header from './Landing_сomponent/Header';
import Plan from './Landing_сomponent/Plan';
import Search from './Landing_сomponent/Search';
import Services from './Landing_сomponent/Services';
import Statistics from './Landing_сomponent/Statistics';

function App() {
  return (
    <div>
    <Header/>
    <Search/>
    <Services/>
    <Clients/>
    <Statistics/>
    <Plan/>
    <Footer/>
    </div>
  );
}

export default App;
