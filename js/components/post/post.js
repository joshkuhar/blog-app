var React = require('react');
var router = require('react-router');
var Link = router.Link;
var getCategory = require('../helpers').getCategory;

var Post = function(props){
	for (var index in props.posts){
		if (props.postId === props.posts[index]._id){
			var post = props.posts[index];
		}
	}
	var category = getCategory(props.categories, post)
	return (
		<div className="post">
			<Link to="/annals"><div className="post-back-link">Back</div></Link>
			<div className="post-title"><span className="title-rider">posted under</span>{post.title}</div>
			<div className="post-date">{post.month +" "+post.date+", "+post.year}</div>
			<div className="post-category">{category}</div>
			<div className="post-body">{post.content}</div>
		</div>
		)
};

module.exports = Post;
