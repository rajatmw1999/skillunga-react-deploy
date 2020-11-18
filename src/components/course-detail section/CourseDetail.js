import React , {Component} from 'react';
import './CourseDetail.css';
import {domain} from '../../data/hosted'


class CourseDetail extends Component{
  constructor(props) {
    super(props);
    var IdofCourse = this.props.Id;
    var nameOfSkill = this.props.nameOfSkill;
    this.state={
      Id:IdofCourse,
      nameOfSkill:nameOfSkill,
      items:[],
      error:null
    }
    // /coursedetails/:skillName/:courseId
}

componentDidMount() {
  console.log(this.state.nameOfSkill);
  var fetchSkills = domain + "data/coursedetails/" + this.state.nameOfSkill + '/' + this.state.Id;
  console.log(fetchSkills);
  fetch(`${fetchSkills}`)
    .then(res => res.json())
    .then(
      (result) => {
      console.log(result.data);
        this.setState({
          items: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          error
        });
      }
    )
  //   console.log(this.state.items);
}

  render(){
    
    return (
      <div className="CourseDetail">
        <div class="container">
          <div class="infodivdetail row">
            <div class="col-12 col-md-4">
            
            <img id=" courseimg " class="imgclass new" src="data:image/jpeg;base64,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" />
          
          </div>
          <div class="col-12 col-md-4">
            <h2 id="coursename" class="h1class new" >Course Name</h2>
            <br></br>
          </div>
          <div class="col-12 col-md-4">
            <div className="aradhna_rightshift">

            <div>
              <h2 class="h2bold" >₹&nbsp;Course Price
              </h2>
              <small class="small">For this course only.</small>
            </div>
            
 
            
            <br></br>
            <br></br>
        
            
           
       
            </div>
            <button type="button" class="gotocourse btn btn-danger ">Go to Course</button>
          </div>
          </div>
          
          <div class="details jumbotron">
            <div class="row">
            <div class="coursedestag col-12 col-md-6">
            <h3 class="h1coursedesc">Course Description</h3>
            <br></br>
            <div>Course Description</div>
            <br></br>
            <h3 class="h1coursedesc" >Related Tags</h3>
            <br></br>
            {/* {this.props.data.tags.map(tag =>(
              <div class="spantagclass">
                <span id="spantag">Tag Name&nbsp;&nbsp;<span id="separatorspan">&nbsp;&nbsp;</span></span>
               
              </div>
            ))} */}
            
            </div>  
            <div class="det col-12 col-md-6">
              <h3 class="h1coursedesc">Course Details</h3>
              <br></br>
              {/* {this.props.data.details.map( detail =>(
                <p>{detail}</p>
              ))} */}
              
            </div>
             
            </div>   
            
          </div>
  
  
        </div>
  
      </div>
    );
  }
}

export default CourseDetail;
