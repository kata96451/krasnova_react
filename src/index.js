import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import MainPage from './Pages/Main/Main';
import About from "./Pages/About/About";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MyBooking from "./Pages/MyBooking/MyBooking";
import Header from "./Components/Header/Header";

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const toggleLogin = () =>{setIsLogin(!isLogin)};
    return (
        <Router>
            <div>
                <Header isLogin={isLogin} toggleLogin={toggleLogin}/>
                    <Switch>
                        <Route path="/">
                            <MainPage />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/my_booking"><MyBooking /></Route>
                    </Switch>
                </div>
        </Router>
    )
}


ReactDOM.render(
  <React.StrictMode>
          <App />
  </React.StrictMode>,
  document.getElementById('root')
);

