import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import Form from './components/pages/Form';
import Home from './components/pages/Form';
import Admin from './components/pages/Admin';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/form" component={Form} />
          <ProtectedRoute path="/admin" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
