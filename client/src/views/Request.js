import React, { Component} from 'react';
import axios from 'axios'; 

import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 

import './Request.css'

class Request extends Component {
    constructor(props) {
        super(props); 

        this.onChangeDate = this.onChangeDate.bind(this); 
        this.onSubmit = this.onSubmit.bind(this); 

        this.state = {
        	date: "", 
           
        }
    }


    onChangeDate(e){
	  	this.setState({
	  		date: e.target.value
	  	});
  	}

 

   onSubmit(e){
   	 const dateObject = {
  			date: this.state.date, 
  		}; 

  	console.log(dateObject); 

  	axios.post('/set-day', dateObject)
	  	.then(response => {
	                console.log(response.data)
	    }).catch((error) => {
	              
	              console.log(error)
	     }); 

	    this.setState({
        	date: "" 
        })

   }

    render() {
      const styles = {
        marginTop:"50px", 
        color: "#fff", 
        background: "#7B241C",
        padding:"15px",
        border: "1px solid #7B241C",
        borderRadius: "3px"
      }
      const form = {
        height: "30px",
        borderRadius:"3px",
        width: "250px"
      }
    	return(
    		<>
          <div className="select">

  	    		<Form method='POST' action='/set-day' > 
              <div className="datetext">
                <small>select date from the date picker below</small>
              </div>
  	    			<Form.Group>
  			    		<Form.Control style={form}
  			    			type="date" 
  			    			name="date"
  			    			value = {this.state.date}
  			    			onChange={this.onChangeDate} />
  		    		</Form.Group>
  		    		<Button type="submit" style={styles}>Get weather</Button>
  		    	</Form>
          </div>


    		</>
    	); 
    }
}

export default Request; 