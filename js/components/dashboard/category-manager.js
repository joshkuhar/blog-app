var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;

var CategoryManager = function(props){
	return (
		<div className="category-manager">
			<h3>Add Categories</h3>
			<div className="category-manager-instructions">If you dropped(deleted) the database you have to ADD CATEGORIES before writing blog.</div>
			<div className="category-manager-instructions">If you refreshed the browser you have to RELOAD CATEGORIES from the database</div>
			<button className="add-categories-button" onClick={props.addClick}>Add Categories</button>
			<button className="reload-categories-button" onClick={props.reloadClick}>Reload Categories</button>
		</div>
		)
};

module.exports = CategoryManager; 