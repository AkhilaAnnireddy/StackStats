
// import './App.css';
import LandingPage  from './Components/Pages/Landingpage/Landingpage.js';
import { ProfilePage } from './Components/Pages/Profilepage/Profilepage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path='/profile' component = {ProfilePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
