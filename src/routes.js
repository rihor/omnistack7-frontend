import React from "react";
import { Switch, Route } from "react-router-dom";

import Feed from "./pages/Feed";
import New from "./pages/New";

function Routes() {
  return (
    <Switch>
      {/* Switch garante que apenas uma rota seja chamada
       a cada url que o usuário acessar  */}
      <Route exact path="/" component={Feed} />
      <Route path="/new" component={New} />
    </Switch>
  );
}

export default Routes;
