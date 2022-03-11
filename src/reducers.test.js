import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
  // initial state search
  const initialStateSearch = {
    searchField: '',
  };
  it('should return the initial state', () => {
    // test for nothing action and result is ''
    expect(reducers.searchRobots(undefined, {})).toEqual({
      searchField: '', // searchField expected empty value
    });
  });

  it('should handle CHANGE_SEARCHFIELD', () => {
    // test for change search field and result must same as input
    // in this case is value of searchField
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCHFIELD, // action type for searchField
        payload: 'abc', // searchField payload
      })
    ).toEqual({
      searchField: 'abc', // searchField expected value 'abc'
    });
  });
});

describe('requestRobots reducer', () => {
  // initial state robots
  const initialStateRobots = {
    robots: [],
    isPending: false,
  };
  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    // undefined means set state with initialStateRobots value, and no action type
  });

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING, // set isPending to true
        // implicitly set {isPending: true}
      })
    ).toEqual({
      robots: [],
      // no set action of robots in REQUEST_ROBOTS_PENDING action
      // so robots is an empty array
      isPending: true,
      // expected isPending value is true after run
      // REQUEST_ROBOTS_PENDING
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS, // set REQUEST_ROBOTS_SUCCESS action
        payload: [
          // set payload contain array of robots
          {
            id: '123',
            name: 'test',
            email: 'paman@test.gmail.com',
          },
        ],
        // implicitly set {isPending: true}
      })
    ).toEqual({
      // expected value robot contain as payload value
      robots: [
        {
          id: '123',
          name: 'test',
          email: 'paman@test.gmail.com',
        },
      ],
      // and pending expected is false
      isPending: false,
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED, // set error with REQUEST_ROBOTS_FAILED
        payload: 'Something Happened', // payload just error with string value
      })
    ).toEqual({
      error: 'Something Happened', // expected value same as payload
      // nothing todo with robots & isPending value
      robots: [],
      isPending: false,
    });
  });
});
