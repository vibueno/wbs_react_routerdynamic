import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Student from "./components/Student";
import Results from "./components/Results";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link className="link" to="/students/2">
          Students #2
        </Link>
        <Link className="link" to="/results/john">
          Results John
        </Link>
      </nav>
      <div className="Instructions">
        <p className="block">
          For this exercise, you will have to:
          <ol>
            <li>
              The BrowserRouter is already imported for you in <b>index.js</b>,
              take a moment and have a look on it.
            </li>
            <li>
              Create a component named {"<Student>"} that will display{" "}
              <b>Hello [id from the parameter]!</b> and add it to the {"<App>"}{" "}
              component. (Don't forget to import this new component in your
              App.js file)
            </li>
            <li>
              Create a second component named {"<Results>"} that will display{" "}
              <b>No results for [name from the parameter]!</b> and add it to the{" "}
              {"<App>"} component. (Don't forget to import this new component in
              your App.js file)
            </li>
            <li>
              The navigation is already created for you, take a moment and have
              a look on it.
            </li>
            <li>
              Now, create a {"<Switch>"} component with two routes in it for
              each component.
            </li>
          </ol>
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://reacttraining.com/react-router/web/api/Hooks/useparams"
          >
            Help{" "}
          </a>
        </p>

        <p className="block">
          <Switch>
            <Route path="/students/:studentId">
              <Student />
            </Route>

            <Route path="/students">
              <Student />
            </Route>

            <Route path="/results/:studentName">
              <Results />
            </Route>

            <Route path="/results">
              <Results />
            </Route>
          </Switch>
        </p>
      </div>
    </div>
  );
}
