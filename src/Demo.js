import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

// ============== Functional based components =====================
// const Demo = (props) => {
// 	return <div className="maindiv_style">
// 			<h1> Hello {props.name} </h1>
// 			<p> Welcome back to Lahore :) </p>
// 		</div>
// }

// ============= name is a props so we can use to it like that ====================
const Demo = ({name}) => {
	return <div className="maindiv_style">
			<h1> Hello {name} </h1>
			<p> Welcome back to Lahore :) </p>
		</div>
}


// ==================================================================================

// ============= class based component ====================
// class Demo extends Component {
// 	render(){
// 		// return <h1> Hello World </h1>
// 		return <div className="maindiv_style">
// 			<h1> Hello {this.props.name} </h1>
// 			<p> Welcome back to Lahore :) </p>
// 		</div> 

// 	}
// }
export default Demo;