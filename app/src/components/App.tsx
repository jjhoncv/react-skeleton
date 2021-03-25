import * as React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Login } from "./Login";
import { Page } from "./Page";
import { Register } from "./Register";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </main>
        <Footer />
      </Router>
    </>
  );
};
