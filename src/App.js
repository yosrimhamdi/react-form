import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import Profile from './components/pages/Profile';
import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile/:id" component={Profile} />
          <ProtectedRoute path="/admin" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
