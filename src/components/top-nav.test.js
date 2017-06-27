import React from 'react';
import {shallow} from 'enzyme';

import {TopNav} from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Dispatches newGame when new game is clicked', () => {
    	const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalled();
    });

    it('Dispatches toggleInfoModal when info is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        const link = wrapper.find('.what');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalled();
    });
});

