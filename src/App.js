import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigation from './components/Navigation'
import Geolocation from './pages/Geolocation'
import Offline from './pages/Offline'
import Camera from './pages/Camera'
import Reachability from './pages/Reachability'
import DevicePosition from './pages/DevicePosition'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/geolocation">
            <Geolocation />
          </Route>
          <Route path="/offline">
            <Offline />
          </Route>
          <Route path="/camera">
            <Camera />
          </Route>
          <Route path="/reachability">
            <Reachability />
          </Route>
          <Route path="/device-position">
            <DevicePosition />
          </Route>
          <Route exact path="/">
            <p>elo witam</p>
          </Route>
        </Switch>
      </Router>
     </div>
  );
}

export default App;
