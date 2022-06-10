import "./assets/css/style.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home/Home';
import StatePage from './views/StatePage.js/StatePage';
import NavBar from "./containers/NavBar";
import Footer from "./containers/Footer";
import FamilyLaws from "./views/FamilyLaws/FamilyLaws";
import ImmigrationLaws from "./views/ImmigrationLaws/ImmigrationLaws";





function App() {




    return (
        <>
            <div class="wrapper">
                <Router>
                    <NavBar />
                    <div class="height180">
                    </div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/state" exact component={StatePage} />
                        <Route path="/familyLaws" exact component={FamilyLaws} />
                        <Route path="/immigrationLaws" exact component={ImmigrationLaws} />
                    </Switch>
                    <Footer />
                </Router>
            </div>
        </>
    );
}

export default App;
