import logo from './logo.svg';
import './App.css';
import {FaQuoteRight} from 'react-icons/fa'
import Heading from './components/Heading';
import Reviews from './components/Reviews';

function App() {
  return (
    <main className="main">
      <Heading />
      <Reviews />
    </main>
  );
}

export default App;
