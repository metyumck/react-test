export default function showArticlesAction(actionContext, payload, done) {

  actionContext.service.read('article', payload, {}, (err, articles, noMoreArticles) => {
	actionContext.dispatch('LOAD_ARTICLE', {articles: articles, noMoreArticles: noMoreArticles});
	done();
	
  });
	

  
}