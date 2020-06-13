import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen.jsx';
import WallScreen from './screens/WallScreen/WallScreen.jsx';
import AddAdvertisementScreen from './screens/AddAdvertisementScreen/AddAdvertisementScreen.jsx';
import AdvertisementScreen from './screens/AdvertisementScreen/AdvertisementScreen.jsx';

import './App.css';

  
  function App() {
    
  
return (
    <div className="App">
      <Router>
        <Route exact path="/" component={WelcomeScreen} />
        <Route exact path="/wall" component={WallScreen} />
        <Route exact path="/add" component={AddAdvertisementScreen} />
        <Route exact path="/ads/:id" component={AdvertisementScreen} />
      </Router>
    </div>
  );
}

export default App;
