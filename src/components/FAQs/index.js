import React, { useState, useContext, createContext } from 'react';
import { Container, Frame, Title, Item, Inner, Header, Body } from './styles/faq';

const ToggleContext = createContext();

export default function FAQs({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

FAQs.Title = function FAQsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

FAQs.Frame = function FAQsFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

FAQs.Item = function FAQsItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

FAQs.Header = function FAQsHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps} >
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

FAQs.Body = function FAQsBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return (
    <Body className={toggleShow ? 'open' : 'closed'} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};
