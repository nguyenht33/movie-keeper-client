import { CHECK_WATCHED_SUCCESS, checkWatchedSuccess,
         CHECK_WATCHED_ERROR, checkWatchedError,
         CHECK_WATCHLIST_SUCCESS, checkWatchlistSuccess,
         CHECK_WATCHLIST_ERROR, checkWatchlistError,
         ADD_WATCHED_REQUEST, addWatchedRequest,
         ADD_WATCHED_SUCCESS, addWatchedSuccess,
         ADD_WATCHED_ERROR, addWatchedError,
         REMOVE_WATCHED_SUCCESS, removeWatchedSuccess,
         REMOVE_WATCHED_ERROR, removeWatchedError,
         ADD_WATCHLIST_SUCCESS, addWatchlistSuccess,
         ADD_WATCHLIST_ERROR, addWatchlistError,
         REMOVE_WATCHLIST_SUCCESS, removeWatchlistSuccess,
         REMOVE_WATCHLIST_ERROR, removeWatchlistError,
         GET_WATCHED_REQUEST, getWatchedRequest,
         GET_WATCHED_SUCCESS, getWatchedSuccess,
         GET_WATCHED_ERROR, getWatchedError,
         GET_WATCHLIST_REQUEST, getWatchlistRequest,
         GET_WATCHLIST_SUCCESS, getWatchlistSuccess,
         GET_WATCHLIST_ERROR, getWatchlistError,
         UPDATE_WATCHED_SUCCESS, updateWatchedSuccess,
         UPDATE_WATCHED_ERROR, updateWatchedError
       } from '../../actions/lists';

describe('checkWatchedSuccess', () => {
  it('Should return the action', () => {
    const action = checkWatchedSuccess('movie');
    expect(action.type).toEqual(CHECK_WATCHED_SUCCESS);
    expect(action.json).toEqual('movie')
  });
});

describe('checkWatchedError', () => {
  it('Should return the action', () => {
    const action = checkWatchedError('error');
    expect(action.type).toEqual(CHECK_WATCHED_ERROR);
    expect(action.error).toEqual('error')
  });
});

describe('checkWatchlistSuccess', () => {
  it('Should return the action', () => {
    const action = checkWatchlistSuccess('movie');
    expect(action.type).toEqual(CHECK_WATCHLIST_SUCCESS);
    expect(action.json).toEqual('movie')
  });
});

describe('checkWatchlistError', () => {
  it('Should return the action', () => {
    const action = checkWatchlistError('error');
    expect(action.type).toEqual(CHECK_WATCHLIST_ERROR);
    expect(action.error).toEqual('error')
  });
});

describe('addWatchedRequest', () => {
  it('Should return the action', () => {
    const action = addWatchedRequest();
    expect(action.type).toEqual(ADD_WATCHED_REQUEST);
  });
});

describe('addWatchedSuccess', () => {
  it('Should return the action', () => {
    const action = addWatchedSuccess('movie');
    expect(action.type).toEqual(ADD_WATCHED_SUCCESS);
    expect(action.json).toEqual('movie')
  });
});

describe('addWatchedError', () => {
  it('Should return the action', () => {
    const action = addWatchedError('error');
    expect(action.type).toEqual(ADD_WATCHED_ERROR);
    expect(action.error).toEqual('error')
  });
});

describe('addWatchlistSuccess', () => {
  it('Should return the action', () => {
    const action = addWatchlistSuccess('movie');
    expect(action.type).toEqual(ADD_WATCHLIST_SUCCESS);
    expect(action.json).toEqual('movie')
  });
});

describe('addWatchlistError', () => {
  it('Should return the action', () => {
    const action = addWatchlistError('error');
    expect(action.type).toEqual(ADD_WATCHLIST_ERROR);
    expect(action.error).toEqual('error')
  });
});

describe('removeWatchedSuccess', () => {
  it('Should return the action', () => {
    const action = removeWatchedSuccess('movie');
    expect(action.type).toEqual(REMOVE_WATCHED_SUCCESS);
    expect(action.status).toEqual('movie')
  });
});

describe('removeWatchedError', () => {
  it('Should return the action', () => {
    const action = removeWatchedError('error');
    expect(action.type).toEqual(REMOVE_WATCHED_ERROR);
    expect(action.error).toEqual('error')
  });
});

describe('removeWatchlistSuccess', () => {
  it('Should return the action', () => {
    const action = removeWatchlistSuccess('movie');
    expect(action.type).toEqual(REMOVE_WATCHLIST_SUCCESS);
    expect(action.status).toEqual('movie')
  });
});

describe('removeWatchlistError', () => {
  it('Should return the action', () => {
    const action = removeWatchlistError('error');
    expect(action.type).toEqual(REMOVE_WATCHLIST_ERROR);
    expect(action.error).toEqual('error')
  });
});

describe('getWatchedRequest', () => {
  it('Should return the action', () => {
    const action = getWatchedRequest();
    expect(action.type).toEqual(GET_WATCHED_REQUEST);
  });
});

describe('getWatchedSuccess', () => {
  it('Should return the action', () => {
    const action = getWatchedSuccess('movie');
    expect(action.type).toEqual(GET_WATCHED_SUCCESS);
    expect(action.json).toEqual('movie')
  });
});

describe('getWatchedError', () => {
  it('Should return the action', () => {
    const action = getWatchedError('error');
    expect(action.type).toEqual(GET_WATCHED_ERROR);
    expect(action.error).toEqual('error')
  });
});

describe('getWatchlistRequest', () => {
  it('Should return the action', () => {
    const action = getWatchlistRequest();
    expect(action.type).toEqual(GET_WATCHLIST_REQUEST);
  });
});

describe('getWatchlistSuccess', () => {
  it('Should return the action', () => {
    const action = getWatchlistSuccess('movie');
    expect(action.type).toEqual(GET_WATCHLIST_SUCCESS);
    expect(action.json).toEqual('movie')
  });
});

describe('getWatchlistError', () => {
  it('Should return the action', () => {
    const action = getWatchlistError('error');
    expect(action.type).toEqual(GET_WATCHLIST_ERROR);
    expect(action.error).toEqual('error')
  });
});

describe('updateWatchedSuccess', () => {
  it('Should return the action', () => {
    const action = updateWatchedSuccess('movie');
    expect(action.type).toEqual(UPDATE_WATCHED_SUCCESS);
    expect(action.json).toEqual('movie')
  });
});

describe('updateWatchedError', () => {
  it('Should return the action', () => {
    const action = updateWatchedError('error');
    expect(action.type).toEqual(UPDATE_WATCHED_ERROR);
    expect(action.error).toEqual('error')
  });
});
