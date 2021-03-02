import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background: #cdcdcd;
  padding: 16px;
  margin: 100px;
  h1 {
    font-size: 22px;
    margin: 16px;
  }

  p {
    font-size: 16px;
    margin: 16px;
  }
`;
