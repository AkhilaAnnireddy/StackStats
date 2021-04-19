
// import './App.css';
import LandingPage  from './Components/Pages/Landingpage/Landingpage.js';
import { ProfilePage } from './Components/Pages/Profilepage/Profilepage.js';
import { SearchList } from './Components/Pages/Search/SearchList.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AboutUs from './Components/Pages/AboutUs/AboutUs.js'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path='/searchlist' component = {SearchList}/>
          <Route exact path='/profile/:user_id' component = {ProfilePage}/>
          <Route exact path='/AboutUs' component={AboutUs}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
