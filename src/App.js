import "./assets/css/style.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home/Home';
import StatePage from './views/StatePage.js/StatePage';
import NavBar from "./containers/NavBar";
import Footer from "./containers/Footer";





function App() {


    return (
        <>
            <div class="wrapper">
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/state" exact component={StatePage} />
                    </Switch>
                    <Footer />
                </Router>
            </div>
        </>
    );
}

export default App;
