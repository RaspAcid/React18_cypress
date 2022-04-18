import renderer from 'react-test-renderer';
import { Greeting } from './Greeting';

test('renders greeting correctly', () => {
  jest.useFakeTimers();
  Date.now = jest.fn(() => 1789532048801);

  const tree = renderer.create(<Greeting />,).toJSON();
  expect(tree).toMatchSnapshot();
});