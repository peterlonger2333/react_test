// import React, { Component }  from 'react';
// import ReactDOM from 'react-dom';
//
// class Token extends Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			val:''
// 		}
// 	}
//
// 	handleChange(e){
// 		this.setState({
// 			val:e.target.value,
// 		})
// 	}
//
// 	render(){
// 		return(
// 			<div>
// 				<input type="text" placeholder="token ID in the NFT contract" onChange={this.handleChange.bind(this)} defaultValue={this.state.val}/>
// 			</div>
// 		)
// 	}
// }
// const domContainer = document.querySelector('#token');
// ReactDOM.render(Token, domContainer);
//
// // ReactDOM.render(
// //   <h1>Hello, world!</h1>,
// //   document.getElementById('token')
// // );


import axios from 'axios';



export function takerprint(){
	var a=document.getElementById("taker").value;
	alert(a);
}


export function getImage(){
	var id=document.getElementById("taker").value;
	axios.get('/artwork/{%s}',id)
		.then(function (response) {
			console.log(response);
			var obj=JSON.parse(response)
		})
		.catch(function (error) {
			console.log(error);
		});
	var img=obj.imageUrl;
}
ReactDOM.render(
	// Try changing to isLoggedIn={true}:
	<Greeting isLoggedIn={false} />,
	document.getElementById('root')
);


