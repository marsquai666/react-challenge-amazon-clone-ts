import React, { useContext } from 'react';
import { AuthContext, AuthContextProvider, UserContext } from './components/AuthContextProvider';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [auth, setAuth] = useContext(AuthContext);
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
    
    <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <div>
              {auth ? `userId:${user?.userId}` : "ログインされていません"}
            </div>
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
