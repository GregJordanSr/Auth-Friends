import React from 'react';
import LoginForm from './components/LoginForm'
import FriendList from "./components/FriendList"
import {Route, Link, Redirect} from "react-router-dom"
import './App.css';

function App() {
  const PrivateRoute = ({ component: FriendsList, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <FriendsList {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );


  return (
    <div className="App">
    <div><Link to="/friends-list">FriendList</Link></div>
      <header className="App-header">
    <PrivateRoute exact path="/friends-list" component={FriendList}/>
       <Route exact path="/" component={LoginForm}/>
      </header>
    </div>
  );
}

export default App;
