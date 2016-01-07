'use strict';

var _articles = [{
	    id: 1,
	    title: "article title 1",
	    image: "http://placehold.it/300x250&text=image 1"
	},
	{
	    id: 2,
	    title: "article title 2",
	    image: "http://placehold.it/300x250&text=image 2"
	},
	{
	    id: 3,
	    title: "article title 3",
	    image: "http://placehold.it/300x250&text=image 3"
	},
	{
	    id: 4,
	    title: "article title 4",
	    image: "http://placehold.it/300x250&text=image 4"
	}

];

var fetchObject = {
	name: 'article',
    // at least one of the CRUD methods is required
    read: function(req, resource, params, config, callback) {
    	console.log(params);
      
    	var _requiredArticles = []
    	var noMoreArticles = {value: false};
    	var i;
    	//get articles according to amount required

    	for (i = params.currentArticleCount; i < (params.currentArticleCount + params.amount); i++) {
    		
    		_requiredArticles.push(_articles[i])
    	}

    	if (_articles.length - params.currentArticleCount <= 1) {
    		noMoreArticles = {value: true};
    	}

		setTimeout(function () {
        	callback(null, JSON.parse(JSON.stringify(_requiredArticles)), noMoreArticles);
    	}, 10);
    	

    	
         
    }
}


export default fetchObject;