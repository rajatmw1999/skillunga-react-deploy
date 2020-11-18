import React, { Component } from "react"
import "./auth.css"
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Cookies from 'universal-cookie';
import  { Redirect } from 'react-router-dom'
const cookies = new Cookies();

firebase.initializeApp({
  apiKey: "AIzaSyAZIMTowmlg0KCgeM6deG3UnHCa6NCdD48",
  authDomain: "skillunga-auth.firebaseapp.com",
})
class Auth extends Component {
  constructor(props)
  {
    super();
  }

  state = { isSignedIn: false, displayMessage:"Signed In Successfully!", signed:false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID   
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => {
        setTimeout(function(){ 
          window.location.reload();
        }, 3000);
        
      }
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      // this.setState({ isSignedIn: !!user })
      // window.location.href = "/";
      if(user){
      // if(user.emailVerified == false){
      // user.sendEmailVerification().then(function() {
        // this.setState({displayMessage:"Verification email has been sent to your email address!"});
      // }).catch(function(error) {
        // this.setState({displayMessage:"Email address is incorrect! Please try again."});
        // console.log("Error!");
        // console.log(error);
      // });
    // }
      this.setState({ isSignedIn: !!user });
  }

  if(user)
  {
    console.log(user);
    cookies.set('login', 1, { path: '/' });
    // window.location.href = "/";
    // return <Redirect to="/" />
  }
  else
  {
    console.log("Currently no user.");
    cookies.set('login', 0, { path: '/' });   
    // return <Redirect to="/" />
  }

  // cookies.set('userdata', false, { path: '/' });  
  // cookies.set('login', false, { path: '/' }); 
  // if(user.emailVerified == true){
  //     console.log("user", user)
  //     cookies.set('userdata', user, { path: '/' }); 
  //     cookies.set('login', true, { path: '/' });   
  //     console.log(cookies.get('userdata')); // Pacman
  // }
  // else{
  //   cookies.set('userdata', false, { path: '/' });   
  //   cookies.set('login', false, { path: '/' }); 
  // }

  // console.log(cookies.get('userdata')); // Pacman
  console.log(cookies.get('login'));
    })
  }

  render() {
    return (
      <div>
    {/* <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
      Launch demo modal
    </button> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">SignIn to SkillUnga</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
                {/* seperator */}

                <div className="App">
        {this.state.isSignedIn ? (
          <span>
            {/* <div>Signed In!</div> */}
            {/* <button onClick={() => firebase.auth().signOut()}>Sign out!</button> */}
            {/* <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <p>{firebase.auth().currentUser.email}</p>
            <p>{firebase.auth().currentUser.phoneNumber}</p>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            /> */}
            <p>{this.state.displayMessage}</p>
            <h1>Welcome to SkillUnga</h1>
            <p>Redirecting...</p>
            
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
          {/* /// */}

          </div>
        </div>
      </div>
    </div>
    </div>
    )
  }
}

export default Auth
