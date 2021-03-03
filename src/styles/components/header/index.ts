import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #24292E;
  position: sticky;
  top: 0;

  i {
    color: #FFFFFF;
    position: absolute;
    left: 15px;
    cursor: pointer;
  }

  a {
    text-decoration: none;

    h1 {
      font-family: 'Sora', sans-serif;
      font-weight: bold;
      font-size: 16px;
      color: #FFFFFF;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  background-color: #24292E;

  p {
    text-align: center;
    color: #fff;

    a {
      color: #fff;
    }
  }
`;
