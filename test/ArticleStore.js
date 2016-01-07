'use strict';

import ArticleStore from '../stores/ArticleStore';

import chai from 'chai';
chai.should();
import {expect} from 'chai';

var storeInstance;
var mockPayload;

beforeEach(function () {
  storeInstance = new ArticleStore();
  mockPayload = { articles: 
	  [ { id: 1,
	       title: 'article title 1',
	       image: 'http://placehold.it/300x250&text=image 1' },
	     { id: 2,
	       title: 'article title 2',
	       image: 'http://placehold.it/300x250&text=image 2' } ],
	  noMoreArticles: {value: false} }
});

afterEach(function () {
  storeInstance = undefined;
  mockPayload = undefined;
});

describe('article store', function () {


  it('should instantiate correctly', function () {
    expect(storeInstance).to.be.an('object');
    expect(storeInstance.articles).to.be.an('array');
    expect(storeInstance.noMoreArticles).to.equal(false);
  });

  it('should handle load article correctly', function () {
    storeInstance.handleLoadArticle(mockPayload);
    expect(storeInstance.articles.length).to.equal(2);
  });

  it('should return the id of the last article when getLastLoadedArticle is called', function () {
    storeInstance.handleLoadArticle(mockPayload);
    expect(storeInstance.getLastLoadedArticle()).to.equal(2);
  });

  it('should return whether there are more articles or not', function () {
  	storeInstance.handleLoadArticle(mockPayload);
  	expect(storeInstance.getNoMoreArticles()).to.equal(false);
  });

  it('should dehydrate', function () {
    storeInstance.handleLoadArticle(mockPayload);
    let state = storeInstance.dehydrate();
    expect(state.articles).to.be.an('array');
    expect(state.noMoreArticles).to.equal(false);
  });

  it('should rehydrate', function (){
  	let state = {articles: [{
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

		],
		noMoreArticles: true};

	storeInstance.rehydrate(state);
	expect(storeInstance.getLastLoadedArticle()).to.equal(4);
	expect(storeInstance.getNoMoreArticles()).to.equal(true);
  });
});