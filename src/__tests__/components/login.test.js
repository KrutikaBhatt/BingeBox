import React from 'react';
import { render } from '@testing-library/react';
import { Login_Form } from '../../components';

jest.mock('react-router-dom');

describe('<Login_Form />', () => {
  it('renders the <Login_Form /> with populated data', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Login_Form>
        <Login_Form.Title>Sign In Now</Login_Form.Title>

        <Login_Form.Base>
          <Login_Form.Input placeholder="Email address" onChange={() => {}} />
          <Login_Form.Input type="password" placeholder="Password" onChange={() => {}} />
          <Login_Form.Submit type="submit" disabled>
            Sign In
          </Login_Form.Submit>
        </Login_Form.Base>

        <Login_Form.Text>
          New to Binge Box? <Login_Form.Link to="/signup">Sign up now.</Login_Form.Link>
        </Login_Form.Text>
        <Login_Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
        </Login_Form.TextSmall>
      </Login_Form>
    );

    expect(
      getByText("This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.")
    ).toBeTruthy();
    expect(getByText('Sign In Now')).toBeTruthy();
    expect(getByText('Sign In')).toBeTruthy();
    expect(getByText('Sign In').disabled).toBeTruthy();
    expect(getByPlaceholderText('Email address')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Login_Form /> with an error', () => {
    const { container, getByText, queryByText } = render(
      <Login_Form>
        <Login_Form.Error>Your email address is already being used</Login_Form.Error>
        <Login_Form.Submit type="submit">Sign In</Login_Form.Submit>
      </Login_Form>
    );

    expect(getByText('Your email address is already being used')).toBeTruthy();
    expect(queryByText('Sign In').disabled).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
