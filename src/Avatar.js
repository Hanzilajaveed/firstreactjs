import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Avatarlist from './Avatarlist';

// import './Demo.css';
import './Avatar.css';
import 'tachyons';


// ============== Functional based components =====================

class Avatar extends Component
{
	constructor(){
		super();
		this.state = {
			name: "Welcome to Avatar World"
		}
	}

	namechange(){
		this.setState({
			name: "Welcome to Pakistan"
		})
	}


	render() {
		const Avatarlistarray = [
		{
			id:1,
			name:"Hanzila",
			work:"Magento2 Developer"
		},
		{
			id:1,
			name:"AbuBakar",
			work:"WEB Developer"
		},
		{
			id:1,
			name:"Muhib",
			work:"ReactJs Developer"
		},
		{
			id:1,
			name:"Shaid",
			work:"ReactNative Developer"
		}
	]

	const arrayavatarcard = Avatarlistarray.map( (avatarcard, i) => {
		return <Avatarlist key={i} id={Avatarlistarray[i].name} name={Avatarlistarray[i].name} work={Avatarlistarray[i].work}/>
		})
	return (
		<div className="mainpage">
			<h1 className="tc"> {this.state.name} </h1>
			{arrayavatarcard}
			<button onClick= { () => this.namechange()} className="ma4"> Subcribe </button>
		</div>
		)

	}
}

export default Avatar;