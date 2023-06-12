// import logo from './logo.svg';
import "./App.scss";
import ListTodos from "./todos/ListTodo";
import Nav from "./nav/Nav";
import Example from "./example/Example";
import AboutReact from "./About/About";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
          <Switch>
            <Route path="/" exact>
              <Example></Example>
            </Route>
            <Route path="/about">
              <AboutReact />
            </Route>
            <Route path="/todo">
              <ListTodos></ListTodos>
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
