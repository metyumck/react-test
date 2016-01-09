export default function loadArticlesAction(actionContext, payload, done) {

  actionContext.service.read('article', payload, {}, (err, articles, noMoreArticles) => {
	actionContext.dispatch('LOAD_ARTICLE', {articles: articles, noMoreArticles: noMoreArticles});
	done();
	
  });
	  
}