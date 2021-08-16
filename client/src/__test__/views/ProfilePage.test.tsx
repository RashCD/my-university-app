import { render, cleanup } from '@testing-library/react';
import Cookie from '../../util/cookie';
import ProfilePage from '../../views/ProfilePage';

afterEach(cleanup);

describe('Test for profile page', () => {
  test('should set the correct cookie content and show on document', () => {
    const object = { username: 'test', country: 'malaysia' };

    const objectStringify = JSON.stringify(object);

    const objectEncode = encodeURI(objectStringify);

    Cookie.set('user', objectEncode);

    const container = render(<ProfilePage />);

    expect(container.getByText('test')).toBeInTheDocument();

    expect(container.getByText('malaysia')).toBeInTheDocument();
  });

  test('should match snapshot of profile page', () => {
    const container = render(<ProfilePage />);

    expect(container).toMatchSnapshot();
  });
});
