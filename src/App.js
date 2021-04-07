import './App.css';
import { Navbar } from './components';
import { AppRouter } from './components/index';

function App() {
  return (
    <div className="app">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
