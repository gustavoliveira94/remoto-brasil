import styled from 'styled-components';

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
  background-color: #fafbfc;

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

  h2 {
    font-size: 42px;
  }
`;

export const Jobs = styled.div`
  width: 100%;
  height: calc(100vh - 275px);
`;
