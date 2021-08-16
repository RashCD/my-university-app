import { cleanup, render, getByText } from '@testing-library/react';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router';
import App from '../App';

afterEach(cleanup);

function renderWithRouter(
  ui: JSX.Element,
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
}

describe('Full App component rendering / navigating', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });

  test('should arrive at landing page on navigate to "/"', () => {
    const { container } = renderWithRouter(<App />);

    const appContainer = container;

    expect(appContainer.innerHTML).toMatch('University List App');
  });

  test('should navigate correctly from landing page to login page', async () => {
    const {
      container,
      history: { navigate },
    } = renderWithRouter(<App />);

    const appContainer = container;

    expect(appContainer.innerHTML).toMatch('University List App');

    await navigate('/login');

    expect(container.innerHTML).toMatch('Login');
  });

  test('should redirect to login page when in profile page (not authenticate)', async () => {
    const {
      container,
      history: { navigate },
    } = renderWithRouter(<App />);

    const appContainer = container;

    expect(appContainer.innerHTML).toMatch('University List App');

    await navigate('/profile');

    expect(getByText(document.body, 'Login')).toHaveTextContent('Login');
  });

  test('should navigate to landing page when route is non-existent', async () => {
    const {
      container,
      history: { navigate },
    } = renderWithRouter(<App />);

    await navigate('/non-existing-routes');

    expect(container).not.toBeEmptyDOMElement();

    expect(container).toHaveTextContent(/404 | Not Found/i);
  });
});
