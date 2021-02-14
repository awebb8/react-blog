import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing';
import Posts from './pages/Posts';
import About from './pages/About';

function App() {
  return (
    <Router>

      <Navbar />

      <Switch>

          <Route exact path={["/", "/landing"]}><Landing/></Route>

          <Route exact path={"/posts"}><Posts/></Route>

          <Route exact path={"/about"}><About/></Route>

      </Switch>

    </Router>
  );
}

export default App;
