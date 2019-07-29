import { Fragment } from "react";
import styled from "styled-components";
import NavItemLink from "next/link";

const NavItemButton = styled.div`
  font-family: "DejaVu Serif";
  color: white;
  font-size: 1.5em;
  width: max-content;
  padding: 10px;
  border: solid;
  margin: 10px;
  cursor: pointer;
  background-color: ${props =>
    props.selected ? "rgba(0,0,0,0.2)" : "transparent"};
  :nth-child(odd) {
    align-self: flex-end;
  }
`;

const NavItem = ({ item, selected }) => {
  const { name, url } = item;
  return (
    <Fragment>
      <NavItemLink href={url || "/"}>
        <NavItemButton selected={selected}>{name}</NavItemButton>
      </NavItemLink>
    </Fragment>
  );
};

export default NavItem;
