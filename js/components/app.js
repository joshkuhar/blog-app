var React = require('react');
var store = require('../store');
var connect = require('react-redux').connect;
var router = require('react-router');
var Link = router.Link;

var App = React.createClass({
	onClick: function(){
		console.log(store.getState());
	},
	render: function(){
		return(
			<div>
				<button onClick={this.onClick}>store</button>
				<div>
					<h1>Blogger's App</h1>
					<div className="nav-bar">
						<div className="nav-bar-item-container"><div className="nav-bar-item">About</div></div>
						<div className="nav-bar-item-container"><Link to={"/"}><div className="nav-bar-item">Home</div></Link></div>
						<div className="nav-bar-item-container"><div className="nav-bar-item">Third Item</div></div>
						<div className="nav-bar-item-container"><div className="nav-bar-item">Fourth Item</div></div>
					</div>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
			)
	}
});

var Container = connect()(App);

module.exports= Container;



	