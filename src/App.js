import Navigation from "./Components/Navigation/Navigation";
import { Switch, Route } from "react-router-dom";
import Container from "./Components/Container/Container.js";
import Home from "./views/Home/Home";
import BookDetails from "./views/BookDetails/BookDetails"
import MoviesView from "./views/MoviesView/MoviesViev"
function App() {
  return (
    <Container>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movie" exact>
          <h1>Фільмачки</h1>
          <MoviesView/>
        </Route>
        <Route path="/movie/:movieId"><BookDetails/></Route>
      </Switch>
    </Container>
  );
}

export default App;
