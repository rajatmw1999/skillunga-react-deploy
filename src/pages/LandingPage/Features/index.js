import React, {Component} from "react";
import './styles.css'
import img1 from './fea1.jpg'
import img2 from './fea2.png'
import img3 from './fea2.png'

class Features extends Component {
    render() {
return(
    <div>
        <div id="features" class="tabs">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 className='feature_rajat_heading'>OUR FEATURES</h2>
            {/* <div class="p-heading p-large rajat_feature_desc">How SkillUnga is Motivated to provide you the best skill development ecosystem across the web.</div> */}
          </div>
        
        </div>
        
        <div class="row">
        
          <ul class="nav nav-tabs" id="lenoTabs" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="nav-tab-1"
                data-toggle="tab"
                href="#tab-1"
                role="tab"
                aria-controls="tab-1"
                aria-selected="true"
                ><i class="fas fa-cog"></i>EXPLORE</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="nav-tab-2"
                data-toggle="tab"
                href="#tab-2"
                role="tab"
                aria-controls="tab-2"
                aria-selected="false"
                ><i class="fas fa-binoculars"></i>COMMUNITIES
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="nav-tab-3"
                data-toggle="tab"
                href="#tab-3"
                role="tab"
                aria-controls="tab-3"
                aria-selected="false"
                ><i class="fas fa-search"></i>NETWORK</a
              >
            </li>
          </ul>
         
          <div class="tab-content" id="lenoTabsContent">
            
            <div
              class="tab-pane fade show active"
              id="tab-1"
              role="tabpanel"
              aria-labelledby="tab-1"
            >
              <div class="container">
                <div class="row">
                  
                  <div class="col-lg-4">
                    <div class="card left-pane first">
                      <div class="card-body">
                        <div class="text-wrapper">
                          <h4 class="card-title">
                            KNOW WHAT'S HAPPENING AROUND
                          </h4>
                          <p class="p-test">
                            Quick tap on the explore icon jumps between
                            communities and explore mode
                          </p>
                        </div>
                        {/* <div class="card-icon"> */}
                          {/* <i class="far fa-compass"></i> */}
                        {/* </div> */}
                      </div>
                    </div>
                    <div class="card left-pane">
                      <div class="card-body">
                        <div class="text-wrapper">
                          <h4 class="card-title">NEVER MISS OUT</h4>
                          <p class="p-test">
                            Find opportunities of a Lifetime. We’ve got your back at every step of your Journey
                          </p>
                        </div>
                        {/* <div class="card-icon"> */}
                          {/* <i class="far fa-file-code"></i> */}
                        {/* </div> */}
                      </div>
                    </div>
                    <div class="card left-pane">
                      <div class="card-body">
                        <div class="text-wrapper">
                          <h4 class="card-title">CUT TO THE CHASE</h4>
                          <p class="p-test">
                            Create events on the go and Manage them effortlessly
                          </p>
                        </div>
                        {/* <div class="card-icon">
                          <i class="far fa-gem"></i>
                        </div> */}
                      </div>
                    </div>
                  </div>
                
                  <div class="col-lg-4">
                    <img
                      class="img-fluid"
                      src={img1}
                      alt="alternative"
                    />
                  </div>
                  
                  <div class="col-lg-4">
                    <div class="card right-pane first">
                      <div class="card-body">
                        <div class="card-icon">
                          <i class="far fa-calendar-check"></i>
                        </div>
                        <div class="text-wrapper">
                          <h4 class="card-title">
                            EASY UPDATES AND NOTIFICATIONS
                          </h4>
                          <p class="p-test">
                            Our super-efficient pop up mechanism provides you
                            with important updates and notifications on the go –
                            maximizing comfort and Importance
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card right-pane">
                      <div class="card-body">
                        <div class="card-icon">
                          <i class="far fa-bookmark"></i>
                        </div>
                        <div class="text-wrapper">
                          <h4 class="card-title">GET INSPIRED</h4>
                          <p class="p-test">
                            Our team of college students around the world help over 1 Billion people create, innovate and explore
                          </p>
                        </div>
                      </div>
                    </div>
               
                  </div>
           
                </div>
           
              </div>
           
            </div>
        
            
            <div
              class="tab-pane fade"
              id="tab-2"
              role="tabpanel"
              aria-labelledby="tab-2"
            >
              <div class="container">
                <div class="row">
               
                  <div class="col-md-4">
                    <img
                      class="img-fluid"
                      src={img2}
                      alt="alternative"
                    />
                  </div>
                 
                  <div class="col-md-8">
                    <div class="text-area">
                      <h3>Vast Campus Networks</h3>
                      <p class="p-test">
                        We deliver you more than 10000+ communities to keep you
                        at the go
                      </p>
                    </div>
                   

                    <div class="icon-cards-area">
                      <div class="card">
                        <div class="card-icon">
                          <i class="fas fa-cube"></i>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">
                            DISCUSSION BASED COMMUNITIES
                          </h4>
                          <p class="p-test">
                            InCampus is the Only platform with personalized
                            discussion – based communities of college
                            professionals, blocking out the world so you can
                            focus on your passion
                          </p>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-icon">
                          <i class="far fa-bookmark"></i>
                        </div>
                        <div class="card-body">
                          <h4 class="car0d-title">PERSONALISED CONTENT</h4>
                          <p class="p-test">
                            Home to endless conversations and authentic human
                            connection. Share your passion by posting stories,
                            links, blogs, images and ideas
                          </p>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-icon">
                          <i class="far fa-calendar-check"></i>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">
                            CREATE COMMUNITIES WITH EASE
                          </h4>
                          <p class="p-test">
                            Experience InCampus super smooth interface to create
                            communities , discuss and manage with ease
                          </p>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-icon">
                          <i class="far fa-file-code"></i>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">
                            MAINTAIN ANONYMITY AND STAY SECURE
                          </h4>
                          <p class="p-test">
                            With every feature we add and every standard in our
                            community guidelines we uphold, we are committed
                            towards creating a secured environment for our users
                          </p>
                        </div>
                      </div>
                    </div>
        
                  </div>
                </div>
        
              </div>
        
            </div>
            
            
            <div
              class="tab-pane fade"
              id="tab-3"
              role="tabpanel"
              aria-labelledby="tab-3"
            >
              <div class="container">
                <div class="row">
            
                  <div class="col-md-8">
                    <div class="icon-cards-area">
                      <div class="card">
                        <div class="card-icon">
                          <i class="far fa-calendar-check"></i>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">
                            SMOOTH NETWORKING EXPERIENCE
                          </h4>
                          <p class="p-test">
                            A new class of search engine with a customized fit
                            that forms an exceptionally smooth experience for
                            searching college based professionals and
                            communities
                          </p>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-icon">
                          <i class="far fa-file-code"></i>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">NETWORK ALL ACROSS</h4>
                          <p class="p-test">
                            Look for students all across the globe, with no
                            restrictions whatsoever. Create grounded networks
                            and commute progress in 1000+ colleges
                          </p>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-icon">
                          <i class="fas fa-cube"></i>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">ALUMINI CONNECT</h4>
                          <p class="p-test">
                            We power ALumini Networks like Never Before. Connect with seniors who have walked the same path as you will.
                          </p>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-icon">
                          <i class="far fa-bookmark"></i>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">CONVERSATIONS COME TO LIFE</h4>
                          <p class="p-test">
                            Send messages seamlessly across devices. Show your
                            reaction and say it better with images and videos.
                            Stay secure and Share endlessly
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
      

      
                  <div class="col-md-4">
                    <img
                      class="img-fluid"
                      src={img3}
                      alt="alternative"
                    />
                  </div>
      
                </div>
      
              </div>
      
            </div>
      
          </div>
      
      
        </div>
      
      </div>
      
    </div>

    </div>
    );
    }
}

export default Features;