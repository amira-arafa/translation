import React, { Suspense } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Auth from "../App/Auth";
const Home = React.lazy(() => import("../Pages/HomePage/Home"));
const About = React.lazy(() => import("../Pages/About/About"));
const Public = React.lazy(() => import("../Components/Routes/Public"));
const Protected = React.lazy(() => import("../Components/Routes/Private"));
const List = React.lazy(() => import("../Components/List/List"));

export class Routing extends React.Component {
  render() {
    return (
      <div className="container">
        App
        <Suspense fallback={<div>Loading ....</div>}>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/public" component={Public} />
              <PrivateRoute exact path="/protected" component={Protected} />
              <Route exact path="/list" component={List} />
            </div>
          </BrowserRouter>
        </Suspense>
      </div>
    );
  }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);

export default Routing;
