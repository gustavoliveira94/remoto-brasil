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
    font-size: 42px;
  }
`;

export const Jobs = styled.div`
  width: 100%;
  min-height: calc(100vh - 275px);
  padding: 10px 0;

  a {
    text-decoration: none;
    color: #24292E;
  }

  .job {
    cursor: pointer;
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fafbfc;
    padding: 20px;
    margin-bottom: 10px;

    .title {
      text-align: center;
      margin-bottom: 20px;
      font-weight: 600;

      span {
        font-weight: 400;
      }
    }

    .labels {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      p {
        margin: 0 5px;
        background-color: #24292E;
        color: #fff;
        padding: 4px;
        border-radius: 5px;
        font-size: 12px;
        margin-bottom: 5px;
      }
    }
  }
`;
