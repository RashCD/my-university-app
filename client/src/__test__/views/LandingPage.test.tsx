import React from 'react';
import {
  cleanup,
  findByText,
  fireEvent,
  getAllByRole,
  render,
  screen,
  act,
} from '@testing-library/react';
import LandingPage from '../../views/LandingPage';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router';

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

jest.mock('react-query', () => ({
  useQuery: () => ({ isLoading: false, error: {}, data: [] }),
}));

describe('Landing page component test', () => {
  beforeEach(() => {
    renderWithRouter(<LandingPage />);
  });

  test('should contains "University List App"', async () => {
    expect(
      await findByText(document.body, 'University List App')
    ).toHaveTextContent('University List App');
  });

  test('should have Login icon visible', async () => {
    const container = document.body;

    const loginButton = getAllByRole(container, 'button').find(
      (element) => element.className === 'button loginButton'
    );

    expect(loginButton).toBeValid();

    expect(loginButton).toBeVisible();
  });

  test('should go to login page when clicking the login button', () => {
    const container = document.body;

    const loginButton = getAllByRole(container, 'button').find(
      (element) => element.className === 'button loginButton'
    ) as HTMLElement;

    fireEvent.click(loginButton);

    expect(window.location.pathname).toBe('/login');
  });

  test('should show table when submitting the form', async () => {
    const nameField = screen.getByLabelText('Name') as HTMLInputElement;

    const countryField = screen.getByLabelText('Country') as HTMLInputElement;

    const buttonField = screen.getByText('Search') as HTMLButtonElement;

    fireEvent.change(nameField, { target: { value: 'name test' } });

    fireEvent.change(countryField, { target: { value: 'country test' } });

    await act(async () => {
      fireEvent.submit(buttonField);
    });

    // console.log(document.body.innerHTML);

    // await expect(screen.getByRole('table')).toBeInTheDocument();

    // expect(nameField.value).toBe('name test');

    // expect(countryField.value).toBe('country test');
  });

  test('should match the snapshot', () => {
    const container = document.body;

    expect(container).toMatchSnapshot();
  });
});
