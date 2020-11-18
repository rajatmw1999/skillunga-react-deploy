import React , {Component} from 'react';
import './style.css';
import loginimg from '../../data/loginimage.png'

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Cookies from 'universal-cookie';
import Navbar from '../Navbar/index'
import { Nav } from 'react-bootstrap';
import Footer from '../footer/index'
import './script'
// import $ from 'jquery'; 
const cookies = new Cookies();
class NewLogin extends Component{
  constructor(props){
    super();
  }
  componentDidMount()
  {
      var logged = 0;
      if(cookies.get('login') == 1)
        logged = 1;
    if(logged == 1)
        window.location = '/';
        // $('.js-tilt').tilt({
        //     scale: 1.1
        // })
  }
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

    render() {
      return(
          <div>
              <Navbar />
        <div class="limiter_login_rajat">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src={loginimg} alt="IMG" />
				</div>

				<form class="login100-form validate-form">
					<span class="login100-form-title">
						<b>SkillUnga Member Login</b>
					</span>
                    {/* <p>Log In to access exclusive discounts on online courses and comprehensive roadmaps.</p> */}
                    <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
				</form>
			</div>
		</div>
	</div>
    <Footer />
    </div>
        );
    }
  }
 

export default NewLogin;

















