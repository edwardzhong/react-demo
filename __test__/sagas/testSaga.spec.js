import {call, put, takeEvery,takeLatest} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import test from '../../src/sagas/testSaga'
import sinon from 'sinon'

describe('testSaga',()=>{
	it('test',()=>{
		expect(test().next().value).toEqual(call(delay,2000));
	});
});

    // // 我们会stub $.post，这样就不用真正的发送请求
    // var post = sinon.stub($, 'post');
    // post.yields();

    // // 针对回调函数使用一个spy
    // var callback = sinon.spy();

    // saveUser({ firstname: 'Han', lastname: 'Solo' }, callback);

    // post.restore();
    // sinon.assert.calledOnce(callback);
// var Promise = require('bluebird');

// var deferred = Promise.defer();
// stub = sinon.stub(deferred, 'resolve').returns(deferred.promise);

// deferred.resolve({data: data});
// // or
// deferred.reject(new Error('fake error'));