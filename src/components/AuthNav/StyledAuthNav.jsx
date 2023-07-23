import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledAuthNav = styled.div`
  display: flex;
  gap: 70px;
  justify-content: right;
  align-items: center;
  position: relative;
  margin-right: 200px;
  margin-top: -34px;
`;

export const StyledAuthLink = styled(NavLink)`
  color: azure;
  font-size: 20px;
  font-family: 'Dosis';
  margin-bottom: 20px;
`;
