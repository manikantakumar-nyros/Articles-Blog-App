const Article = require('../models/Articles');

module.exports={
	async save (req,res) {
		console.log('saving article')
		await Article.create(req.body, (err, data) =>{
			console.log(data)
			if(!err){
				res.json({
				status:"success",
				message:"Article Added Successfully",
				data:data
			})
		   }
		})
	},
	async fetch (req,res) {
		console.log('get all articles')
		await Article.find((err,data) =>{
			if(!err){
				res.json({
				status:"success",
				message:"Articles fetched Successfully",
				data:data
			})
		  } else{
		  	res.json({
		  		status:"failure",
		  		message:"Something went wrong"
		  	})
		  }
		})
	},
	async getArticle (req, res) {
    console.log('get article by id')
    await Article.findOne({ _id: req.body.id }, (err, data) => {
      if (!err) {
        res.json({
          status: "success",
          message: "Todo updated successfully",
          data:data
        })
      } else {
        res.json({
          status: "fail",
          message: "Something went wrong"
        })
      }
    })
  },
}