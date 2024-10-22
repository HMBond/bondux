import debounce from 'lodash/debounce';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Context from '../Context';

import Button from '../styled/Button';
import Logo from '../styled/Logo';
import { NavButton } from './NavButton';
import { NavBackIcon, NavForwardIcon, NavToggleIcon } from './NavIcons';
import NavItem from './NavItem';

const NavBase = styled.div`
  opacity: ${(props) => (props.showNav ? '1' : '0')};
  transition: opacity 0.3s ease-in;
  position: fixed;
  bottom: -1px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: flex-end;
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

  @media print {
    display: none;
  }
`;

const NavButtonsContainer = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
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
  pointer-events: ${(props) => (props.open ? 'auto' : 'none')};
  transition: opacity 0.5s ease-in-out;
`;

const NavMenu = styled.nav`
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
          <NavButtonsContainer>
            <Button
              onClick={() => context.nav.back()}
              order={1}
              disabled={context.nav.onFirstPage || context.nav.open}
            >
              <NavBackIcon />
            </Button>
            <Button
              onClick={() => context.nav.forward()}
              order={3}
              disabled={context.nav.onLastPage || context.nav.open}
            >
              <NavForwardIcon />
            </Button>
            <NavButton
              open={context.nav.open}
              properlyClosed={properlyClosed}
              order={2}
              onClick={() => {
                debounce(() => setProperlyClosed(false), 500);
                context.nav.setOpen(true);
              }}
            >
              <NavToggleIcon open={context.nav.open} />
            </NavButton>
          </NavButtonsContainer>
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
