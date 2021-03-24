import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigation from './components/Navigation'
import GeolocationPage from './pages/GeolocationPage'
import OfflinePage from './pages/OfflinePage'
import CameraPage from './pages/CameraPage'
import ReachabilityPage from './pages/ReachabilityPage'
import DevicePositionPage from './pages/DevicePositionPage'
import InternationalizationPage from './pages/InternationalizationPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/geolocation">
            <GeolocationPage />
          </Route>
          <Route path="/offline">
            <OfflinePage />
          </Route>
          <Route path="/camera">
            <CameraPage />
          </Route>
          <Route path="/reachability">
            <ReachabilityPage />
          </Route>
          <Route path="/device-position">
            <DevicePositionPage />
          </Route>
          <Route exact path="/">
            <p>elo witam</p>
          </Route>
          <Route exact path="/internationalization">
            <InternationalizationPage />
          </Route>
        </Switch>
      </Router>
     </div>
  );
}

export default App;
