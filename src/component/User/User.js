import React from 'react';
const User = props => {
	const {name,img,email,phone} = props ;
return (
	<div className="user">
		<div className="user-img"><img src="" alt=""/></div>
	<div className="user-details">
		<h4>
	name:{}
	<br/>
	email:{}
	<br/>
	phone:{}
	<br/>
	<button>show number</button> <button>add me</button>

	</h4>
	</div>
	</div>
)
}
export default User; 
