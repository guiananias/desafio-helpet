import React from 'react';
import { shallow } from 'enzyme';

import { CardComponent } from '../../app/components';

describe('<CardComponent />', () => {
  it('should to match snapshot', () => {
    const navigation = { navigate: jest.fn() };
    const data = {
      id: 1,
      overview: 'Overview test description',
      title: 'The Lords of the Rings',
    };

    const wrapper = shallow(
      <CardComponent navigation={navigation} data={data} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
