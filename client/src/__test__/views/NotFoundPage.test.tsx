import { render, cleanup } from '@testing-library/react';
import NotFoundPage from '../../views/NotFoundPage';

afterEach(cleanup);

describe('Test for not found page page', () => {
  test('should match snapshot of not found page page', () => {
    const container = render(<NotFoundPage />);

    expect(container).toMatchSnapshot();
  });
});
