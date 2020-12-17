import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widgets';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="App">
      {
        user ? (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        ) : (
            <Login />
          )
      }

    </div>
  );
}

export default App;
