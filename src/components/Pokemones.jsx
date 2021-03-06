import Navbar from "./Navbar";
import Footer from "./Footer";
import PokeSection from "./PokeSection";
import DetailPokemon from "./DetailPokemon";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Pokemones = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <PokeSection />
          </Route>
          <Route path='/detail/:id'>
            <DetailPokemon />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default Pokemones;
