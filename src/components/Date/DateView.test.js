import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import { DateView } from './DateView';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('Date view shows date after click', () => {
  const wrapper = shallow(<DateView/>);
  const checkbox = () => wrapper.find('#switcher');

  expect(checkbox().props().checked).toEqual(false);
  expect(wrapper.exists('#currentDate')).toEqual(false);

  checkbox().simulate('change');

  expect(checkbox().props().checked).toEqual(true);
  expect(wrapper.exists('#currentDate')).toEqual(true);
});
