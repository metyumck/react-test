export default function showArticlesAction(actionContext, payload, done) {
    
  actionContext.service.read('article', payload, {}, (err, articles) => {
    console.log(err)
  	if (!err) {
	    actionContext.dispatch('LOAD_ARTICLE', articles);
	    done();
	} else {

		actionContext.dispatch('NO_MORE_ARTICLES', err);
		done();
	}
  });

  
}