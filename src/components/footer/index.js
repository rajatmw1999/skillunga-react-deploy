import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {categoryData} from '../../data/category'
import {domain} from '../../data/hosted'
import skillungapic from '../../data/skillunga.png'
import Cookies from 'universal-cookie';
import incampuspic from '../../data/incampus.png'

const cookies = new Cookies();


class Footer extends React.Component {
    constructor(props)
    {
        super(props);
        var len = window.location.pathname.split('/').length;
        console.log(window.location.pathname.split('/'));
        console.log(len);
        if(len<=2)
            this.state={
                displayIcons:true,
                loading:true,
                displayCategory:null
            }
        else
        this.state={
            displayIcons:false,
            loading:true,
            displayCategory:null
        }
    }
    async componentDidMount(){
        var top10;
        var logged = 0;
        if(cookies.get('login')==1)
        logged=1;
        var fetchUrl = domain + 'roadmap/10'
        await fetch(`${fetchUrl}`)
        .then(res => res.json())
        .then((res) => {
            console.log(res);
            top10 = res.map((data)=> 
            logged?
            <li className="aradhna_footerli"><a  target="_blank" href={`/roadmap/${data._id}`}>{data.NameOfRoadmap.substring(0,15)}</a></li>
            :
            <li className="aradhna_footerli"><a data-toggle="modal" data-target="#exampleModal">{data.NameOfRoadmap.substring(0,15)}</a></li>
            )
        });
        var category = categoryData.map((data) => 
        <li className="aradhna_footerli"><a target="_blank" href={`${data.redirectLink}`}>{data.displayName}</a></li>
        )
        var len = window.location.pathname.split('/').length;
        console.log(len);
        if(len<=2)
            this.setState({
                displayIcons:true,
                loading:false,
                displayCategory:category,
                displayTop10: top10
            });
        else
        this.setState({
            displayIcons:false,
            loading:false,
            displayCategory:category,
            displayTop10: top10
        });
    }
    render() {
        var logged = 0;
        if(cookies.get('login')==1)
        logged=1;
      return <div className="footer-clean">
                <footer>
                    <div className="container col-12 col-md-11">
                        <div className="row justify-content-center">
                            <div className="col-sm-4 col-md-3 item col-lg-2">
                                <h3>Categories</h3>
                                <ul>
                                    {/* <li className="aradhna_footerli"><a href="#">Web Development</a></li>
                                    <li className="aradhna_footerli"><a href="#">Networking</a></li>
                                    <li className="aradhna_footerli"><a href="#">Cloud Computing</a></li>
                                    <li className="aradhna_footerli"><a href="#">Data Science</a></li>
                                    <li className="aradhna_footerli"><a href="#">Data Structures</a></li>
                                    <li className="aradhna_footerli"><a href="#">Algorithms</a></li>
                                    <li className="aradhna_footerli"><a href="#">App Development</a></li>
                                    <li className="aradhna_footerli"><a href="#">Ethical Hacking</a></li> */}
                                    {this.state.loading?"":this.state.displayCategory}
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-3 item col-lg-2">
                                <h3>Top Roadmaps of the Week</h3>
                                <ul>
                                    {/* <li className="aradhna_footerli"><a href="#">Freecodecamp.org</a></li>
                                    <li className="aradhna_footerli"><a href="#">Linkedin Learning</a></li>
                                    <li className="aradhna_footerli"><a href="#">NetAcad.com</a></li>
                                    <li className="aradhna_footerli"><a href="#">Coursera</a></li>
                                    <li className="aradhna_footerli"><a href="#">Udemy</a></li>
                                    <li className="aradhna_footerli"><a href="#">Edx</a></li> */}
                                    
                                    {this.state.displayTop10}
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-3 item col-lg-2">
                                <h3>Unga Factors</h3>
                                <ul>
                                    {
                                        logged?
                                    <li className="aradhna_footerli"><a href="/featured">Featured Courses</a></li>
                                        :
                                    <li className="aradhna_footerli"><a data-toggle="modal" data-target="#exampleModal">Featured Courses</a></li>
                                    }
                                    {logged?
                                     <li className="aradhna_footerli"><a href="/featured">Top Discounts</a></li>
                                    :
                                    <li className="aradhna_footerli"><a data-toggle="modal" data-target="#exampleModal">Top Discounts</a></li>
                                    }
                                    
                                    {/* <li className="aradhna_footerli"><a href="#"></a></li> */}
                                    <li className="aradhna_footerli"><a href="/roadmaps">Roadmaps</a></li>
                                </ul>
                            </div>
                            {this.state.displayIcons?
                            <div className="col-sm-4 col-md-4  col-lg-3 item social">
                            
                            
                                <a href="https://www.facebook.com/InCampus.in/" target='_blank' className="fb-col">
                                    <i className="icon ion-social-facebook"></i>
                                </a>
                                {/* <a href="#"className="tw-col">
                                    <i className="icon ion-social-twitter"></i>
                                </a> */}
                                <a href="https://www.linkedin.com/company/incampusinc" target="_blank" className="lin-col">
                                    <i className="icon ion-social-linkedin"></i>
                                </a><a href="https://www.instagram.com/official_incampus/?hl=en" target="_blank" className="ins-col">
                                    <i className="icon ion-social-instagram"></i>
                                </a>
                            
                            
                                
                                <p className="copyright"> <img src={skillungapic} id="rajat_footer_logo" /> </p>
                                <b>  <p className="copyright">A  <a href="https://incampus.in" target="_blank"> <img style={{width:"4%"}} src={incampuspic}></img>campus </a>  Initiative.  </p></b>
                                {/* <p className="copyright">Terms &amp; Conditions</p>
                                <p className="copyright">Privacy Policy</p> */}
                            </div>
                            :
                            <div className="col-sm-4 col-md-4  col-lg-3 item social">
                             <p className="copyright"> <img src={skillungapic} id="rajat_footer_logo" /> </p>
                           <b>  <p className="copyright">A  <a href="https://incampus.in" target="_blank">  <img style={{width:"4%"}} src={incampuspic}></img> campus</a>  Initiative.  </p></b>
                                {/* <p className="copyright">Terms &amp; Conditions</p>
                                <p className="copyright">Privacy Policy</p> */}
                            </div>
                            }
                        </div>
                    </div>
                </footer>
            </div>;
     
  }
  }
  
  export default Footer;