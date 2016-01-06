import React from 'react';
import Article from './Article';
import ArticleStore from '../stores/ArticleStore';
import showArticles from '../actions/showArticles';
import { connectToStores } from 'fluxible-addons-react';
import { provideContext } from 'fluxible-addons-react';

const ENTER_KEY = 13;

class ArticleList extends React.Component {

    constructor (props) {
      super(props);
      
    }

    componentWillMount () {
      this.context.executeAction(showArticles, {
        currentArticleCount: this.props.articlesCount,
        amount: 2
      });

    }

    onClick (event) {
      event.preventDefault();

      this.context.executeAction(showArticles, {
        currentArticleCount: this.props.articlesCount,
        amount: 1
      });
      
    }

    render() {
        this.articleItems = this.props.articles.map(function (article) {
          return (
            <Article key={article.id} articleContent={article.title} articleImg={article.image} />
          );
        }, this);
        return (
            <div>
                {this.articleItems}
                <button onClick={this.onClick.bind(this)}>Load another article</button>
            </div>
        );
    }
}

ArticleList.contextTypes = {
  executeAction: React.PropTypes.func,
  getStore: React.PropTypes.func
}

ArticleList = provideContext(connectToStores(ArticleList, [ArticleStore], function (context, props) {
    return {
      articles: context.getStore(ArticleStore).getArticles(),
      articlesCount: context.getStore(ArticleStore).getLastLoadedArticle()
    };
}));


export default ArticleList;
