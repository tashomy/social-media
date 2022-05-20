import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="241884548371-gi0bq7djcmb3ibd68ra19qo8kqetabln.apps.googleusercontent.com">
      <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
          </Switch>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
