import React,{Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../actions/textChangeAction'

// const About =()=>(
//   <div>
//     <h2>this is About</h2>
//     <label htmlFor="inputName">name:</label><input id="inputName" type="text" onChange={(e)=>handleChange(e)}>
//     <label htmlFor="inputEmail">email:</label><input id="inputEmail" type="email" onChange={(e)=>handleChange(e)}>
//     <p>name:{}</p>
//     <p>email:{}</p>
//     <ul>
//       <li><Link to="/">index</Link></li>
//       <li><Link to="/home/123">home</Link></li>
//     </ul>
//   </div>
// )

export class About extends Component{
	handleChange(e){
		let val=e.target.value,
			id=e.target.id;
		if(id=='inputName'){
			this.props.nameChange(val);
		} else if(id=='inputEmail'){
			this.props.emailChange(val);
		}
	}

	render(){
		const {name,email}=this.props.inputText;
		return(
		  <div>
		    <h2>this is About</h2>
		    <label htmlFor="inputName">name:</label>
		    <input id="inputName" type="text" onChange={(e)=>this.handleChange(e)} defaultValue={name} />
		    <label htmlFor="inputEmail">email:</label>
		    <input id="inputEmail" type="email" onChange={(e)=>this.handleChange(e)} defaultValue={email} />
		    <p>name:{name}</p>
		    <p>email:{email}</p>
		    <ul>
		      <li><Link to="/">index</Link></li>
		      <li><Link to="/home/123">home</Link></li>
		    </ul>
		  </div>
		)
	}
}

export default connect(
  	(state) => {
  		return {inputText:state.inputText};
  	},
  	(dispatch) => { 
	  return {
	  	nameChange:(txt) => dispatch(actions.nameChange(txt)),
	  	emailChange:(txt) => dispatch(actions.emailChange(txt))
	  };
	}
)(About);
