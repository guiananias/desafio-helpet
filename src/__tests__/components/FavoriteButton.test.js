import React from 'react';
import { shallow } from 'enzyme';

import { FavoriteButtonComponent as FavoriteButton } from '../../app/components/FavoriteButton';

describe('<FavoriteButtonComponent />', () => {
  it('should to match snapshot', () => {
    const wrapper = shallow(<FavoriteButton />);

    expect(wrapper).toMatchSnapshot();
  });
});
