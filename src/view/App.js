// import logo from './logo.svg';
import "./App.scss";
import ListTodos from "./todos/ListTodo";
import Nav from "./nav/Nav";
import Example from "./example/Example";
import AboutReact from "./About/About";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserComponent from "./User/User";
import UserDetail from "./User/UserDetail";
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
            <Route path="/user" exact>
              <UserComponent></UserComponent>
            </Route>
            <Route path="/user/:id">
              <UserDetail></UserDetail>
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
