import styled from "styled-components";
import NavItemLink from "next/link";

const NavItemButton = styled.div`
  font-family: "DejaVu Condensed Bold";
  color: white;
  font-size: 1.2em;
  padding: 10px;
  margin: 10px;
  border: solid;
  width: max-content;
  align-self: center;
  cursor: pointer;
  background-color: ${props =>
    props.selected ? "rgba(0,0,0,0.2)" : "transparent"};
  @media only screen and (min-width: 960px) {
    :nth-child(odd) {
      align-self: flex-end;
    }
    :nth-child(even) {
      align-self: flex-start;
    }
  }
`;

const NavItem = ({ item, selected, select }) => {
  const { name, url } = item;
  return (
    <NavItemLink href={url || "/"}>
      <NavItemButton
        selected={selected}
        onMouseOver={() => select()}
        onClick={() => select()}
      >
        {name}
      </NavItemButton>
    </NavItemLink>
  );
};

export default NavItem;
