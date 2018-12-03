import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Recipe from "./Recipe";
import Recipes from './Recipes';

const Router = () => (
  <BrowserRouter>
   <switch>
      <Route path="/" component={Recipes} exact/>
      <Route path="/recipe/:id" component={Recipe} />
   </switch>
  </BrowserRouter>
);

export default Router;

