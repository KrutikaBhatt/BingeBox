import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { PHeader } from '../../components';
import logo from '../../BingeBoxLogo.png';

jest.mock('react-router-dom');

describe('<PPHeader />', () =>{
    it('renders the basic <PPHeader /> with a background', () => {
        const { container, getByText, getByTestId } = render(
          <PHeader>
            <PHeader.Frame>
              <PHeader.Logo src={logo} alt="Binge Box" />
              <PHeader.TextLink active="true">Hello I am a link!</PHeader.TextLink>
            </PHeader.Frame>
          </PHeader>
        );

        expect(getByText('Hello I am a link!')).toBeTruthy();
        expect(getByTestId('header-bg')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    })
})