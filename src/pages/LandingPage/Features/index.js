import React, {Component} from "react";
import './styles.css'
import img1 from './courses.png'
import img2 from './feeds.png'
import img3 from './jobs.png'

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
                ><i class="fas fa-cog"></i>SKILLS</a
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
                ><i class="fas fa-search"></i>JOBS</a
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
                            COMPARE COURSES
                          </h4>
                          <p class="p-test">
                            Compare and get best courses from the top platforms across the web.
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
                          <h4 class="card-title">EXCLUSIVE FEATURED DISCOUNTS</h4>
                          <p class="p-test">
                            Get exclusive discounts on best courses around the world through the featured courses.
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
                          <h4 class="card-title">HUNDREDS OF CATEGORIES</h4>
                          <p class="p-test">
                            Develop your skill in your field of interest from hundreds of categories available at SkillUnga.
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
                            SKILL TEST AND VERIFICATION
                          </h4>
                          <p class="p-test">
                            Participate in weekly quizzes and skill ranking tests and get verified rankings
                            by competing against the experts from all around the globe.
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
                          <h4 class="card-title">VERIFIED E RESUME</h4>
                          <p class="p-test">
                            Get a verified e-resume based on your skills and projects and stand apart from the crowd with your verified skills.
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
                          <p class="p-test text-font-features-rajat">
                            Join communities based solely on skills development discussions. Develop and flaunt your skills,
                            increase your ranking, share your acheivements, thoughts and projects among peers and other 
                            experts in your industry.
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
                      {/* <div class="card">
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
                      </div> */}
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
                            JOBS AND INTERNSHIP ALERTS
                          </h4>
                          <p class="p-test">
                            Get automatic jobs and internship alert of top 100 companies of the world 
                            directly in your inbox. Apply, practice and get hired!
                          </p>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-icon">
                          <i class="far fa-file-code"></i>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">PERSONALISED JOB OPENINGS</h4>
                          <p class="p-test">
                            Get personalised jobs openings best fit for your industry and your skills.
                            Finding a job has never been so easy.
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
                            We power ALumini Networks like Never Before.
                            Connect with alumni and mentors of your field and get advice directly from the ultimate winners.
                          </p>
                        </div>
                      </div>
                      {/* <div class="card">
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
                      </div> */}
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