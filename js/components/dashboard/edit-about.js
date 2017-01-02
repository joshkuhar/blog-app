var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');
var store = require('../../store');
var router = require('react-router');
var Link = router.Link;

var AboutEdit = React.createClass ({
	componentDidMount: function(){
		// This is the id for the about page. To prevent multiple abouts, 
		// only GET, PUT, and DELETE are utilized through this component.
		var id = "586a95d7f0792e5f629ae7df";
		this.props.dispatch(actions.getAbout(id));
	},
	handleBlogChange: function(event) {
    	this.props.dispatch(actions.changeAbout(event.target.value));
	},
  	handleSubmit: function(event) {
    	event.preventDefault();
		var id = "586a95d7f0792e5f629ae7df";
    	this.props.dispatch(actions.updateAbout(id));
	},
  	onClick: function(){
  		console.log(store.getState());
	},
	render: function() {
	    return (
		    <div className="about-form-outside-container">
		      <form onSubmit={this.handleSubmit}>
			        <div className="about-form-container">
			        	<div className="about-header-container">
			        		<h3 className="about-title">Edit About</h3>
			        		<div className="about-button-wrapper">
								<input className="about-button"type="submit" value="Submit" />
							</div>
			        	</div>
					<textarea className="about-textarea" value={this.props.about} placeholder="tell the world about yourself..." onChange={this.handleBlogChange} />
				    </div>
		      </form>
		     </div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
    	about: state.about,

    };
};

var Container = connect(mapStateToProps)(AboutEdit);

module.exports = Container;