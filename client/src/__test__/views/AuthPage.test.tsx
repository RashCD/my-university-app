import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router';
import {
  render,
  cleanup,
  screen,
  fireEvent,
  act,
} from '@testing-library/react';
import AuthPage from '../../views/AuthPage';

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

describe('Test for auth page', () => {
  beforeEach(() => {
    renderWithRouter(<AuthPage />);
  });

  test('should have login tab & login section', () => {
    const loginButtons = screen.getAllByText('Login');

    const loginButton = loginButtons.find(
      (button) => button.className === 'button'
    );

    expect(screen.getByText('Username')).toBeInTheDocument();

    expect(screen.getByText('Password')).toBeInTheDocument();

    expect(loginButton).toBeVisible();
  });

  test('should go to signup section when clicking the signup tab', () => {
    const signupButtons = screen.getAllByText('Sign Up');

    fireEvent.click(signupButtons[0]);

    expect(screen.getByText('Username')).toBeVisible();

    expect(screen.getByText('Password')).toBeVisible();

    expect(screen.getByText('Confirm Password')).toBeVisible();

    expect(screen.getByText('Country')).toBeVisible();

    expect(screen.getByText('Signup')).toBeVisible();
  });

  test('should submit to profile page when login', async () => {
    const loginButtons = screen.getAllByText('Login');

    const loginButton = loginButtons.find(
      (button) => button.className === 'button'
    ) as HTMLButtonElement;

    const usernameField = screen.getByLabelText('Username');

    const passwordField = screen.getByLabelText('Password');

    fireEvent.change(usernameField, { target: { value: 'test123' } });

    fireEvent.change(passwordField, { target: { value: 'testpassword123' } });

    await act(async () => {
      fireEvent.submit(loginButton);
    });
  });

  test('should match snapshot of auth page', () => {
    const container = render(<AuthPage />);

    expect(container).toMatchSnapshot();
  });
});
