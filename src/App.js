import { AppRouter, Navbar } from './components/index';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Navbar />
      <AppRouter />
    </div>
    </BrowserRouter>
  );
}

export default App;
