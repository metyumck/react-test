'use strict';

import loadArticles from '../actions/loadArticles';
import { createMockActionContext } from 'fluxible/utils';
import MockService from 'fluxible-plugin-fetchr/utils/MockServiceManager';
import ArticleStore from '../stores/ArticleStore';
import articleResponse from './fixtures/article-response.js';

import chai from 'chai';
chai.should();
import {expect} from 'chai';

describe('load articles', function () {
    let context;

    beforeEach(function () {
        context = createMockActionContext({
            stores: [ArticleStore]
        });

        context.service = new MockService();
        context.service.setService('article', function (method, params, config, callback) {
            if (params.emulateError) {
                return callback(new Error('There was an error.'));
            }

            callback(null, articleResponse, true);
        });
       
    });

    it('should execute the action', function (done) {

    	let params = {
          currentArticleCount: 2,
          amount: 1
        };

        context.executeAction(loadArticles, params, function (err) {
        	expect(context.dispatchCalls.length).to.equal(1);
            expect(context.dispatchCalls[0].name).to.equal('LOAD_ARTICLE');
            let articles = context.getStore(ArticleStore).getArticles();
            expect(articles).to.be.an('array');
            done();
        });

       
    });
});