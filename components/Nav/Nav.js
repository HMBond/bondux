import { useState, useEffect } from 'react';
import Context from '../Context';
import styled from 'styled-components';
import debounce from 'lodash/debounce';

import Logo from '../styles/Logo.js';
import NavItem from './NavItem';
import { NavBackIcon, NavForwardIcon, NavToggleIcon } from './NavIcons';
import { NavButton } from './NavButton';

const NavBase = styled.div`
  opacity: ${(props) => (props.showNav ? '1' : '0')};
  transition: opacity 0.3s ease-in;
  position: fixed;
  bottom: -1px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 2px,
      ${(props) => props.theme.colors.bg} 2px,
      ${(props) => props.theme.colors.bg} 4px
    ),
    linear-gradient(transparent, ${(props) => props.theme.colors.bg}),
    linear-gradient(transparent, ${(props) => props.theme.colors.bg});
  @media screen and (min-width: 420px) {
    max-width: 240px;
    height: 120px;
    border-top-left-radius: 120px;
    border-top-right-radius: 120px;
    padding: 0 10px;
  }
`;

const NavPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${(props) => (props.open ? '1' : '0')};
  pointer-events: ${(props) => (props.open ? 'all' : 'none')};
  transition: opacity 0.5s ease-in-out;
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: auto;
  width: 250px;
  user-select: none;
`;

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const [properlyClosed, setProperlyClosed] = useState(true);

  useEffect(() => {
    !showNav && setShowNav(true);
  }, [showNav]);

  return (
    <Context.Consumer>
      {(context) => (
        <NavBase showNav={showNav}>
          <NavBackIcon
            hidden={context.nav.onFirstPage || context.nav.open}
            onClick={() => context.nav.back()}
            order={1}
          ></NavBackIcon>
          <NavForwardIcon
            hidden={context.nav.onLastPage || context.nav.open}
            onClick={() => context.nav.forward()}
            order={3}
          ></NavForwardIcon>
          <NavButton
            open={context.nav.open}
            properlyClosed={properlyClosed}
            onClick={() => {
              debounce(() => setProperlyClosed(false), 500);
              context.nav.setOpen(true);
            }}
            order={2}
          >
            <NavToggleIcon open={context.nav.open} />
          </NavButton>
          <NavPage
            open={context.nav.open}
            onClick={() => {
              debounce(() => setProperlyClosed(true), 500);
              context.nav.setOpen(false);
            }}
          >
            <Logo light />
            <NavMenu>
              {context.nav.pageList.map(({ navName, url }, index) => (
                <NavItem
                  navName={navName}
                  url={url}
                  key={index}
                  selected={index === context.selector.position}
                  select={() => context.selector.setPosition(index)}
                />
              ))}
            </NavMenu>
          </NavPage>
        </NavBase>
      )}
    </Context.Consumer>
  );
};

export default Nav;
