import * as actions from './actions';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import configureStoreMockstore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStoreMockstore([thunkMiddleware]);

it('should create an action to search robots', () => {
  // testing change search field action
  const text = 'wooo';
  const expectedAction = {
    type: CHANGE_SEARCHFIELD,
    payload: text,
  };
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it('handles requesting robots API', () => {
    const store = mockStore(); // mocking store

    store.dispatch(actions.requestRobots());
    // get dispatched request robots which is sent from App.js
    
    const action = store.getActions();
    // action = [{ type: REQUEST_ROBOTS_PENDING, }]

    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING,
    };
  expect(action[0]).toEqual(expectedAction);
});
