import styled from 'styled-components';

const Home = () => {
  return (
    <StyledTitle>
      Welcome to your Phonebook. Please, register or log in
    </StyledTitle>
  );
};

export default Home;

const StyledTitle = styled.h1`
  font-size: 40px;
  font-family: Kanit;
  color: #2b2b8d;
  text-align: center;
  margin-top: 50px;

  white-space: nowrap; 
  overflow: hidden; 
  animation: marquee 15s linear infinite; 

 
  @keyframes marquee {
    0% {
      transform: translateX(
        100%
      ); 
    }
    100% {
      transform: translateX(
        -100%
      ); 
    }
  }
`;
