'use strict';

import { BaseStore } from 'fluxible/addons';


class ArticleStore extends BaseStore {
	constructor(dispatcher) {
        super(dispatcher);
        this.articles = [];
        this.noMoreArticles = false;
    }

	handleLoadArticle (payload) {
        var i;
        for (i = 0; i < payload.articles.length; i++) {
            this.articles.push(payload.articles[i]);
        }
        this.noMoreArticles = payload.noMoreArticles.value;

		this.emitChange();
	}

	getArticles () {
		return this.articles;
	}

    getLastLoadedArticle () {
        return this.articles.length;
    }

    getNoMoreArticles () {
        return this.noMoreArticles;
    }

	dehydrate() {
        return {
            articles: this.articles,
            noMoreArticles: this.noMoreArticles
        };
    }
    rehydrate(state) {
        this.articles = state.articles;
        this.noMoreArticles = state.noMoreArticles;
    }


}

ArticleStore.storeName = 'ArticleStore';
ArticleStore.handlers = {
    'LOAD_ARTICLE': 'handleLoadArticle'
};

export default ArticleStore;