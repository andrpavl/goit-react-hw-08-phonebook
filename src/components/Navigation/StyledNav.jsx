import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledTitle = styled(NavLink)`
  margin: 20px 0 0 20px;
  color: azure;
  font-family: Kanit;
  margin-top: 12px;
  font-size: 26px;
  letter-spacing: 0.2rem;
  z-index: 1;
`;
export const StyledNav = styled.nav`
    display: flex;
    justify-content: left;
    align-items: center;

`
export const StyledHome = styled(NavLink)`
  margin-top: 10px;
  margin-left: 150px;
  color: azure;
  font-size: 20px;
  font-family: 'Dosis';
  z-index: 1;
`;

export const StyledCont = styled(NavLink)`
margin-top: 12px;
  margin-left: 20px;
  color: azure;
  font-size: 20px;
  font-family: 'Dosis';
`;
