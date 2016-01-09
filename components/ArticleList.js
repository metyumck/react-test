import React from 'react';
import Article from './Article';
import ArticleStore from '../stores/ArticleStore';
import loadArticles from '../actions/loadArticles';
import { connectToStores } from 'fluxible-addons-react';
import { provideContext } from 'fluxible-addons-react';

class ArticleList extends React.Component {

    constructor (props) {
      super(props);
      this.state = {buttonText: "Load one more article"}
    }

    componentWillMount () {
      this.context.executeAction(loadArticles, {
        currentArticleCount: this.props.articlesCount,
        amount: 2
      });

    }

    onClick (event) {
      event.preventDefault();
      if (!this.props.noMoreArticles) {
        this.context.executeAction(loadArticles, {
          currentArticleCount: this.props.articlesCount,
          amount: 1
        });
      } else {
        this.setState({buttonText: "Sorry, no more articles to display"});
      }
      
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
                <button onClick={this.onClick.bind(this)}>{this.state.buttonText}</button>
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
      articlesCount: context.getStore(ArticleStore).getLastLoadedArticle(),
      noMoreArticles: context.getStore(ArticleStore).getNoMoreArticles()
    };
}));


export default ArticleList;
