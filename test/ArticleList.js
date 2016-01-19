'use strict';

import {createMockComponentContext} from 'fluxible/utils';
import ArticleList from '../components/ArticleList';
import loadArticles from '../actions/loadArticles';
import jsdom from 'jsdom';
import mockery from 'mockery';


import chai from 'chai';
chai.should();
import {expect} from 'chai';

describe('ArticleList component', function () {
	var componentContext;
	var React;
    var ReactTestUtils;
    var component;


	beforeEach(function (done){
		mockery.enable({
			useCleanCache: true,
            warnOnUnregistered: false
		});
		componentContext = createMockComponentContext();
		jsdom.env('<html><body></body></html>', [], function (err, window) {
            
            global.window = window;
            global.document = window.document;
            global.navigator = window.navigator;
            React = require('react');
            ReactTestUtils = require('react-test-utils');
        });
        done();
	});

	afterEach(function () {
        delete global.window;
        delete global.document;
        delete global.navigator;
        mockery.disable();
    });

    it('should load 2 articles when the component is loaded', function (done) {
	    // component = ReactTestUtils.renderIntoDocument(
    	// 	<ArticleList context={componentContext} />
    	// );
    	done();
    });


});


