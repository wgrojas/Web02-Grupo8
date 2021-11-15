import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import LoginM from "../Login/LoginM";
import error from "../Img/404.jpg";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />
        <Route exact path={["/", "/loginM"]} component={LoginM} />
        {/* <Route exact path={["/home"]} component={Home} /> */}


        {/*Ruta de pagina no encontrada (404*/}
        <Route
          path={"*"}
          component={() => (
            // <h1 style={{ marginTop: 300 }}>
            <img src={error} alt="404"/>
            //   404
            //   <br />
            //   Pagina no encontrada
            // </h1>
          )}
        />
      </Switch>
    </Router>
  );
}

// function Home() {
//   return <h2 style={{ marginTop: 100 }}>Home</h2>;
// }
