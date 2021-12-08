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
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/cocktails" exact>
            <CocktailList />
          </Route>
          {/* <Route path="/cocktails/:id">
            <IndivCocktail />
          </Route> */}
          <Route path="/cocktails/new">
            <NewCocktailForm />
          </Route>
          <Route path="/cocktails/:cocktailId/edit">
            <EditCocktailForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
