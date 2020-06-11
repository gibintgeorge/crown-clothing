import React from 'react';
import { Switch, Route } from 'react-router-dom';


import HomePage from "./pages/HomePage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import Header from "./components/header/header.component";
import SignInandSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.js";
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInandSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
