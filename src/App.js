import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Popper from '@popperjs/core';
import "./assets/css/style.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home/Home';
import StatePage from './views/StatePage.js/StatePage';
import NavBar from "./containers/NavBar";
import Footer from "./containers/Footer";
import FamilyLaws from "./views/FamilyLaws/FamilyLaws";
import ImmigrationLaws from "./views/ImmigrationLaws/ImmigrationLaws";
import Weddingceremonies from "./views/WeddingCeremonies/weddingceremonies";





function App() {




    return (
        <>
            <div class="wrapper">
                <Router>
                    <NavBar />
                    {/* <div class="height180">

                    </div> */}
                    <div class='heightCalc'>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/home" exact component={Home} />
                            <Route path="/state" exact component={StatePage} />
                            <Route path="/familyLaws" exact component={FamilyLaws} />
                            <Route path="/immigrationLaws" exact component={ImmigrationLaws} />
                            <Route path="/weddingCeremonies" exact component={Weddingceremonies} />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </div>
        </>
    );
}

export default App;
