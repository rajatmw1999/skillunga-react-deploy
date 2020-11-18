import React, {Component} from "react";

import './styles.css'
import Cookies from 'universal-cookie';

const cookies = new Cookies();
class Cta extends Component {
    render() {
      var logged = 0;
      if(cookies.get('login')==1)
        logged=1;
      if(this.props.criteria == "roadmap"){
        return(
          <section id="call-to-action" class="wow fadeInUp">
          <div class="container">
            <div class="row">
              <div class="col-lg-9 text-center text-lg-left">
                <h3 class="cta-title vanshika_h3">Skill roadmaps  </h3>
                <p class="cta-text"> Explore exclusive rodmaps on different skills and stay updated with latest trends and skills  
        </p>
              </div>
              <div class="col-lg-3 cta-btn-container text-center">
                <a class="cta-btn align-middle" target="_blank" href="/roadmaps">Explore more</a>
              </div>
            </div>
          </div>
        </section> 
        )
      }
      else{
        return (
          
  <section id="call-to-action" class="wow fadeInUp">
  <div class="container">
    <div class="row">
      <div class="col-lg-9 text-center text-lg-left">
        <h3 class="cta-title vanshika_h3">Grab best offers </h3>
        <p class="cta-text"> Grab best offers on the best courses from the top platforms at one place 
</p>
      </div>
      <div class="col-lg-3 cta-btn-container text-center">
        {logged?
        <a class="cta-btn align-middle" href="/featured">Explore OFFERS</a>
        :
        <a class="cta-btn align-middle" data-toggle="modal" data-target="#exampleModal">Explore OFFERS</a>
        }
        
      </div>
    </div>
  </div>
</section> 
        );
      }
    }
}

export default Cta;