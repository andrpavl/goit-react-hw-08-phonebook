import { StyledAuthLink, StyledAuthNav } from './StyledAuthNav';

export const AuthNav = () => {
  return (
    <StyledAuthNav>
      <StyledAuthLink to="/register">Register</StyledAuthLink>
      <StyledAuthLink to="/login">Log In</StyledAuthLink>
    </StyledAuthNav>
  );
};
