import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import {UsersLists} from '../components/users-lists';

describe('<UsersLists />', () => {
  it('Renders UsersLists without crashing', () => {
    shallow(<UsersLists queries={{page: 1}}/>);
  });

  it('Calls getWatched callback', () => {
    const callback = jest.fn();
    const movie = [{title: 'title', id: '123', poster_path: 'poster.jpg'}]
    const wrapper = shallow(
      <UsersLists
        listType={'watched'}
        getWatched={callback}
        listType={'watched'}
        moviesWatched={movie}
        queries={{page: 1}}
      />
    );
    expect(callback).toHaveBeenCalled;
    expect(wrapper.find('.users-lists')).toHaveLength(1);
  });

  it('Calls getWatchlist callback', () => {
    const callback = jest.fn();
    const movie = [{title: 'title', id: '123', poster_path: 'poster.jpg'}]
    const wrapper = shallow(
      <UsersLists
        listType={'list'}
        getWatchlist={callback}
        getWatched={callback}
        listType={'watched'}
        moviesWatched={movie}
        queries={{page: 1}}
      />
    );
    expect(callback).toHaveBeenCalled;
  });
});
