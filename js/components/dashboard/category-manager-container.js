var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;
var CategoryManager = require('./category-manager');

var Category = React.createClass({
	
	addClick: function(){
		this.props.dispatch(actions.loadCategories(this.props.categories));
	},
	reloadClick: function(){
		this.props.dispatch(actions.getCategories());
	},
	loadBlogs: function(){
		this.props.dispatch(actions.loadBlogs(this.props.blogs));
	},
	render: function(){
		return (
			<CategoryManager addClick={this.addClick} reloadClick={this.reloadClick} loadBlogs={this.loadBlogs}/>
			)
	}
});

var mapStateToProps = function(state, props) {
    return {
    	categories: state.categories,
    	blogs: state.dummyBlogs

    };
};

var Container = connect(mapStateToProps)(Category);

module.exports = Container;

