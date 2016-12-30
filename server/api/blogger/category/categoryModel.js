var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = mongoose.Schema({
	category: {
		type: Object,
		unique: true,
		required: true
	},
	blogPosts: [{
		type: Schema.Types.ObjectId,
		ref: 'blogPost'
	}]
});

var Category = mongoose.model('Category', CategorySchema);

module.exports = Category;	

/*

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: true
	},
	items: [{
		type: Schema.Types.ObjectId,
		ref: 'Item'
	}]
});

var Category = mongoose.model('Category', CategorySchema);

module.exports = Category;	


*/