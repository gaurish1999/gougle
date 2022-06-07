import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Routes from './components/Routes';

function App() {

  const [darktheme, setDarkTheme] = useState(false);

  return (
    <div className={darktheme ? 'dark' : ''}>
      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    <div className='bg-red-300 dark:bg-red-900 dark:text-red-200 min-h-screen'>
      Tailwind
      <Navbar />
      <Footer />
      <Routes />
    </div>

    </div>
  );
}

export default App;
