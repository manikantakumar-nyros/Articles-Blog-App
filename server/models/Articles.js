var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
  title: { type: String },
  description:{ type:String },
  image:{ type:String },
  category:{ type:String},
    }, {
  timestamps: true
});

module.exports = mongoose.model('article', articleSchema);