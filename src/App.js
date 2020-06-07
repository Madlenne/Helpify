import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen.jsx';

import './App.css';

  
  function App() {
    // firebase.initializeApp(firebaseConfig);
    
  
return (
    <div className="App">
      <Router>
        <Route exact path="/" component={WelcomeScreen} />
      </Router>
    </div>
  );
}

export default App;
