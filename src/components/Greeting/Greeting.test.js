import { Greeting } from './Greeting';
import renderer from 'react-test-renderer';

test('renders greeting correctly', () => {
  jest.useFakeTimers();
  Date.now = jest.fn(() => 1789532048801);

  const tree = renderer.create(<Greeting />).toJSON();
  expect(tree).toMatchSnapshot();
});