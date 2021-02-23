import styled from 'styled-components';

export const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #24292E;
  margin-bottom: 40px;

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

export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;

  div {
    max-width: 900px;
    border: 1px solid #B5B5B5;
    border-radius: 5px;
    padding: 10px;

    span {
      font-weight: 600;
      font-size: 12px;
    }

    h2 {
      font-weight: 600;
      margin-top: 15px;
    }

    p {
      margin-top: 20px;
      line-height: 1.5;
    }
  }
`;

export const Indicate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 130px;
  background-color: #24292E;
  margin-top: 40px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 360px;
    height: 58px;
    background-color: #24292E;
    border: 0.5px solid #FFFFFF;
    border-radius: 5px;
    font-family: 'Sora', sans-serif;
    font-size: 14px;
    color: #FFFFFF;
    cursor: pointer;
    box-shadow: rgb(255, 255, 255, 0.6);
    animation: pulse 2s infinite;

    @keyframes pulse {
      0% {
        -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.6);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.6);
      }
      70% {
          -moz-box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
          box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
      }
      100% {
          -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
      }
    }

    :hover {
      opacity: 0.8;
      transition: .2s ease-in;
    }
  }
`;

export const Repositories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 140px;
      height: 35px;
      background-color: #FFFFFF;
      border: 1px solid #B5B5B5;
      border-radius: 5px;
      color: #24292E;

      i {
        margin-right: 10px;
      }
    }
  }

  .cards {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    height: auto;
    padding: 20px;
    max-width: 910px;

    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 270px;
      height: 270px;
      background: #FFFFFF;
      border: 1px solid #B5B5B5;
      border-radius: 5px;
      margin: 0 10px 10px 10px;

      h3 {
        font-weight: 600;
      }

      img {
        width: 170px;
        height: 170px;
        margin: 10px 0;
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 245px;
        height: 30px;
        border: 1px solid #B5B5B5;
        border-radius: 5px;
        text-decoration: none;
        font-weight: 600;
        font-size: 14px;
        color: #24292E;
      }

      :hover {
        box-shadow: 0px 1px 4px 4px rgb(0 0 0 / 10%);
      }
    }
  }
`;
