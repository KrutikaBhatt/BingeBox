import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import faqsData from '../../fixtures/faqs';
import { FAQs } from '../../components';

describe('<FAQs />', () => {
  it('renders the <FAQs /> with populated data', () => {
    const { container, getByText } = render(
      <FAQs>
        <FAQs.Title>Frequently Asked Questions</FAQs.Title>
        <FAQs.Frame>
          {faqsData.map((item) => (
            <FAQs.Item key={item.id}>
              <FAQs.Header>{item.header}</FAQs.Header>
              <FAQs.Body>{item.body}</FAQs.Body>
            </FAQs.Item>
          ))}
        </FAQs.Frame>
      </FAQs>
    );

    expect(getByText('Frequently Asked Questions')).toBeTruthy();
    expect(getByText('What is Binge Box?')).toBeTruthy();
    expect(getByText('How much does Binge Box cost?')).toBeTruthy();
    expect(getByText('Where can I watch?')).toBeTruthy();
    expect(getByText('How do I cancel?')).toBeTruthy();
    expect(getByText('What can I watch on Binge Box?')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('opens and closes the <FAQs /> component', () => {
    const { container, queryByText } = render(
      <FAQs>
        <FAQs.Title>Frequently Asked Questions</FAQs.Title>
        <FAQs.Frame>
          {faqsData.map((item) => (
            <FAQs.Item key={item.id}>
              <FAQs.Header>{item.header}</FAQs.Header>
              <FAQs.Body data-testid="FAQs-body">{item.body}</FAQs.Body>
            </FAQs.Item>
          ))}
        </FAQs.Frame>
      </FAQs>
    );

    const whatIsBingBoxBodyText =
      "Binge Box is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!";

    expect(queryByText(whatIsBingBoxBodyText)).toBeFalsy();
    fireEvent.click(queryByText('What is Binge Box?'));
    //expect(queryByText(whatIsBingBoxBodyText)).toBeTruthy();

    fireEvent.click(queryByText('What is Binge Box?'));
    expect(queryByText(whatIsBingBoxBodyText)).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
