import React from 'react';
import { render } from '@testing-library/react';
import { OptingForm } from '../../components';

describe('<OptingForm />', () => {
  it('renders the <OptingForm /> with populated data', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <OptingForm>
        <OptingForm.Input placeholder="Email address" />
        <OptingForm.Button>Try it now</OptingForm.Button>
        <OptingForm.Break />
        <OptingForm.Text>Ready to watch? Enter your email to create or restart your membership</OptingForm.Text>
      </OptingForm>
    );

    expect(getByText('Try it now')).toBeTruthy();
    expect(getByText('Ready to watch? Enter your email to create or restart your membership')).toBeTruthy();
    expect(getByPlaceholderText('Email address')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
