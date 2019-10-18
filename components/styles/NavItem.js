import styled from "styled-components";
import NavItemLink from "next/link";

const NavItemButton = styled.div`
  font-family: "DejaVu Condensed Bold";
  color: white;
  font-size: 1.2rem;
  padding: 10px;
  margin: 10px;
  width: max-content;
  align-self: center;
  cursor: pointer;
  background-color: ${props =>
    props.selected ? "rgba(255,255,255,0.2)" : "transparent"};
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
