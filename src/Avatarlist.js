import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import 'tachyons';


// ============== Functional based components =====================
const Avatarlist = (props) => {
	return (
		<div class="avatar_div ma4 bg-light-purple dib pa3 tc grow">
			<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
			<h1 className=""> {props.name} </h1>
			<p> {props.work} </p>
		</div>
	)
}


export default Avatarlist;