import React , {Component} from 'react';
import {domain} from '../../data/hosted'

import './style.css';
class RoadmapMore extends React.Component{
    render() {
      return(
    <div className="roadmapmore col-12">
        <div id="c">
		<p id="one">Tours & Travels</p>
		<p id="two">Amazing Places On earth</p>
		<p id="three">July 20, 2020</p>	
	</div>
	<div class="half">
		<img src="./images/1.png"></img>
		<center><a href="#Fashion">Fashion</a></center>
		<p id="four">New york fashion week's continued <br></br>the evolution</p>
		<p id="five">2 days ago</p>
	</div>
	<div class="half">
		<img src="./images/2.png"></img>
		<center><a href="#Fashion">Fashion</a></center>
		<p id="four">New york fashion week's continued <br></br> the evolution</p>
		<p id="five">2 days ago</p>
	</div>
	<div class="half">
		<img src="./images/3.png"></img>
		<center><a href="#Fashion">Fashion</a></center>
		<p id="four">New york fashion week's continued <br></br>the evolution</p>
		<p id="five">2 days ago</p>
	</div>
        
    </div> 
          
          
        );
    }
  }
 

export default RoadmapMore;
