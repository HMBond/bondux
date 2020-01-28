import styled from "styled-components";
import NavItemLink from "next/link";

const NavItemButton = styled.div`
  color: ${props => props.theme.colors.bg};
  font-size: 2.8rem;
  padding: 10px;
  width: max-content;
  align-self: center;
  cursor: pointer;
  font-family: ${props => (props.selected ? "DejaVu Condensed Bold" : "unset")};
  @media screen and (min-width: 600px) {
    transform: ${props => (props.selected ? "rotateX(-190deg)" : "")};
    transition: transform 0.2s linear;
  }
`;

const NavItem = ({ navName, url, selected, select, ...props }) => {
  return (
    <NavItemLink href={url || "/"} {...props}>
      <NavItemButton
        selected={selected}
        onMouseOver={() => select()}
        onClick={() => select()}
      >
        {navName}
      </NavItemButton>
    </NavItemLink>
  );
};

export default NavItem;
