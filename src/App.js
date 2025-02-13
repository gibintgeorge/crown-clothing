import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInandSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.js";
import "./App.css";

import { auth, createUserProfileDocumnet } from "./firebase/firebase.util";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocumnet(userAuth);
        console.log(userRef);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      else {//if user is not available then set to logoff
        this.setState({
          currentUser: userAuth// can be set to null also
        })
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInandSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
