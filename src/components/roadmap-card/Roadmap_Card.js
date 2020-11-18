import React , {Component} from 'react';

import './Roadmap_Card.css';
import renderHtml from 'react-render-html'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class RoadmapCard extends Component{
constructor(props)
{
  super(props);
  // console.log(this.props);
}
      render() {
        var logged = 0;
        if(cookies.get('login')==1)
            logged=1;
        return(
        
          <div className="hello col-12 col-md-4" style={{marginBottom: "2rem"}} >
            {logged?
            <a target="_blank" href={`/roadmap/${this.props.Id}`}>
            <div className="card roadmap" >
              <img className="card-img-top" src={this.props.image} alt="Roadmap Image"></img>
              <div className="card-body">
                <h2 className="card-title h4tag">{this.props.name}</h2>
                {this.props.text?
              <p className="card-text">{renderHtml(this.props.text.substring(0,45))}...</p>:""  
              }
                
                <div >
                <span ><em>{this.props.author}</em></span> <span className="spantag">{this.props.likes} Upvotes</span> 
                {/* <span className="spantag">344000 Views</span> */}
                </div>
              </div>
            </div>
            </a>
            :
            <a data-toggle="modal" data-target="#exampleModal">
<div className="card roadmap" >
  <img className="card-img-top" src={this.props.image} alt="Roadmap Image"></img>
  <div className="card-body">
    <h2 className="card-title h4tag">{this.props.name}</h2>
    {this.props.text?
  <p className="card-text">{renderHtml(this.props.text.substring(0,45))}...</p>:""  
  }
    
    <div >
    <span ><em>{this.props.author}</em></span> <span className="spantag">{this.props.likes} Upvotes</span> 
    {/* <span className="spantag">344000 Views</span> */}
    </div>
  </div>
</div>
</a>
            }

          </div>
    
          
          
        );
    }
  }
    

export default RoadmapCard;
