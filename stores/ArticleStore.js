'use strict';

import { BaseStore } from 'fluxible/addons';


class ArticleStore extends BaseStore {
	constructor(dispatcher) {
        super(dispatcher);
        this.articles = [];
    }

	handleLoadArticle (payload) {
        var i;
        for (i = 0; i < payload.length; i++) {
            this.articles.push(payload[i]);
        }

        console.log(this.articles);
		this.emitChange();
	}

	getArticles () {
		return this.articles;
	}

    getLastLoadedArticle () {
        return this.articles.length;
    }

	dehydrate() {
        return {
            articles: this.articles
        };
    }
    rehydrate(state) {
        this.articles = state.articles
    }


}

ArticleStore.storeName = 'ArticleStore';
ArticleStore.handlers = {
    'LOAD_ARTICLE': 'handleLoadArticle'
};

export default ArticleStore;