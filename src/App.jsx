import './App.css';
import Header from './Header';
import Home from './Home';
import {  BrowserRouter,Routes, Route } from "react-router-dom";
import Checkout from './Checkout'
import Login from './Login'
import { useStateValue } from './Stateprovider';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import Signup from './Signup';
import Footer from './Footer';
function App() {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        // console.log("THE USER IS >>> ", authUser);
        if (authUser) {
          // the user just logged in / the user was logged in

          dispatch({
            type: 'SET_USER',
            user: authUser,
          });
        } else {
          // the user is logged out
          dispatch({
            type: 'SET_USER',
            user: null,
          });
        }
      });
    }, []);
    return (
       <BrowserRouter>
        <div className = "App" >





         <Routes>
  <Route path='/login' element={<>
    {/* <Header /> */}
    <Login />
  </>} />

  <Route path='/Checkout' element={<>
    <Header />
    <Checkout />
  </>} />

  <Route path='/Signup' element={<>
    {/* <Header /> */}
    <Signup />
  </>} />

  <Route path='/' element={<>
    <Header />
    <Home />
   </>} />
</Routes>
<Footer />
        </div>
        </BrowserRouter>

    );
}

export default App;
