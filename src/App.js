import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Header />
            <br/>
            <br/>
            <br/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
