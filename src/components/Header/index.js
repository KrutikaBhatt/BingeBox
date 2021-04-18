import React,{useState} from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {Background ,Container,Logo,ButtonLink,Feature,Text , FeatureCallOut,Link, Group, Dropdown,Picture,Profile,Search,SearchIcon,SearchInput,PlayButton,DropdownItemLink} from './styles/header';

export default function Header({bg =true,children,...restProps}){
    return bg ? <Background {...restProps}>{children}</Background> :children;
}

Header.Frame =function HeaderFrame({children,...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    );
};
Header.Callout = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
  };

  Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
  };

Header.Logo  = function HeaderLogo({imageLink,...restProps}){
    return(
        <ReactRouterLink to={imageLink}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    );
};


Header.SearchBar = function HeaderSearch({ searchTerm, setsearchTerm, ...restProps }) {
  const [searchActive, setsearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setsearchActive((searchActive) => !searchActive)} data-testid="search-click">
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setsearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
  
};
Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature>{children}</Feature>;
  };
  
Header.ButtonLink = function HeaderButton({children , ...restProps}){
    return (<ButtonLink {...restProps}>{children}</ButtonLink>);
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
  };

  Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
  };
  Header.DropItem = function HeaderTextLink({ children, ...restProps }) {
    return <DropdownItemLink {...restProps}>{children}</DropdownItemLink>;
  };
  
Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
  };
  
  Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
  };
  
Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
  };

  
Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};