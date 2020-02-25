import React from "react";
import LandingPage from "./components/LandingPage/screens";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import YouScreen from "./components/YouPage/screens";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/you" component={YouScreen} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
};

export default App;
