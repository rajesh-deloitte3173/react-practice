import './App.css';
import Home from './home';
import Navbar from './Navbar';

function App() {
  const title = 'Welcome to the new blog';
  return (
    <div className="App">
      <div className='content'>
        <h1>{title}</h1>
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
