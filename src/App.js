import Header from './compnents/Header/Header'
import './App.css';
import Main from './compnents/Main/Main';
import Footer from './compnents/Footer/Footer'
import Subma from './compnents/Subma/Subma';
import Final from './compnents/finallyMain/Final';
import Rating from './compnents/Reating/Rating';
import BeFi from './compnents/Befinal/BeFi';
import Content from './compnents/Content/Content';

function App() {
  return (
    <div className="App">
  < Header />
  <Main />
  <Subma />
  <Content />
  <Final />
  <Rating />
  <BeFi />
  <Footer />

    </div>
  );
}

export default App;
