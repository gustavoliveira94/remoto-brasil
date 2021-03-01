import styled from 'styled-components';

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
  background-color: #fafbfc;
  padding: 0 20px;

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
      width: 180px;
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

  h2 {
    font-size: 22px;
    text-align: center;
  }
`;

export const Body = styled.div`
  align-self: center;
  max-width: 920px;
  min-height: calc(100vh - 275px);
  margin: 50px 20px;

  li {
    list-style: none;
  }
`;
