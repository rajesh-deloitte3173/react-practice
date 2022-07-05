import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import BlogDetails from './BlogDetails';
import Create from './Create';
import Home from './home';
import Navbar from './Navbar';
import NotFound from './NotFound';

function App() {
  const title = 'Welcome to the new blog';
  return (
    <Router>
      <div className="App">
        <h1>{title}</h1>
        <Navbar />
        <div className='content'>
          <Switch>
            ,<Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blog/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
