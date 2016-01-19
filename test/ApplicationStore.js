'use strict';
import Action from 'fluxible';
import ApplicationStore from '../stores/ApplicationStore';

import chai from 'chai';
chai.should();
import {expect} from 'chai';

var storeInstance;

let actionName = 'NAVIGATE_SUCCESS';  
let mockNavPayload = { path: '/about',
    method: 'get',
    page: 'about',
    title: 'About',
    name: 'about',
    url: '/about',
    params: {},
    navigate: { transactionId: 4607405348356096, url: '/about' },
    query: {} 
  }

beforeEach(function () {

  storeInstance = new ApplicationStore();


});

afterEach(function () {
  storeInstance = undefined;

});

describe('application store', function () {


  it('should instantiate correctly', function () {
    expect(storeInstance).to.be.an('object');
    expect(storeInstance.pageTitle).to.equal('');
  });

});