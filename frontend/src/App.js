import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import CocktailList from "./components/CocktailList";
import IndivCocktail from "./components/IndivCocktail";
import NewCocktailForm from "./components/NewCocktailForm";
import EditCocktailForm from "./components/EditCocktailForm";
import EditCocktailReview from "./components/EditCocktailReview";
import Home from "./components/Home";
import Splash from "./components/Splash";
import BarList from "./components/BarList";
import IndivBar from "./components/IndivBar";
import NewBarForm from "./components/NewBarForm";
import EditBarForm from "./components/EditBarForm";
import NewCheckin from "./components/NewCheckin";
import BarDetails from "./components/IndivBar/BarDetails";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [barComponent, setBarComponent] = useState("info");
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <Splash />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/cocktails" exact>
            <CocktailList />
          </Route>
          <Route path="/cocktails/new">
            <NewCocktailForm />
          </Route>
          <Route path="/cocktails/:cocktailId/reviews/:reviewId">
            <EditCocktailReview />
          </Route>
          <Route path="/cocktails/:cocktailId/edit">
            <EditCocktailForm />
          </Route>
          <Route path="/cocktails/:id">
            <IndivCocktail />
          </Route>
          <Route path="/bars/new">
            <NewBarForm />
          </Route>
          <Route path="/bars/:barId/edit">
            <EditBarForm />
          </Route>
          <Route path="/bars/:barId">
            <IndivBar
              setBarComponent={setBarComponent}
              barComponent={barComponent}
            />
          </Route>
          <Route path="/bars" exact>
            <BarList setBarComponent={setBarComponent} />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
