import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

// Auth
import LoginFormPage from "./components/Auth/LoginFormPage";
import SignupFormPage from "./components/Auth/SignupFormPage";
import * as sessionActions from "./store/session";

// Layout/Other
import Navigation from "./components/Navigation";
import Splash from "./components/Splash";
import About from "./components/About";

// Cocktails
import CocktailList from "./components/Cocktails/CocktailList";
import IndivCocktail from "./components/Cocktails/IndivCocktail";
import NewCocktailForm from "./components/Cocktails/NewCocktailForm";
import EditCocktailForm from "./components/Cocktails/EditCocktailForm";

// Bars
import BarList from "./components/Bars/BarList";
import IndivBar from "./components/Bars/IndivBar";
import NewBarForm from "./components/Bars/NewBarForm";
import EditBarForm from "./components/Bars/EditBarForm";

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

          {/* Auth */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>

          {/* Cocktails */}
          <Route path="/cocktails" exact>
            <CocktailList />
          </Route>
          <Route path="/cocktails/new">
            <NewCocktailForm />
          </Route>
          <Route path="/cocktails/:cocktailId/edit">
            <EditCocktailForm />
          </Route>
          <Route path="/cocktails/:id">
            <IndivCocktail />
          </Route>

          {/* Bars */}
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
