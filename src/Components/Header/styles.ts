import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px;
  background: #007bff;
  position: sticky;
  top: 0;

  h1 {
    margin: 0 24px;
    color: #fff;
  }

  aside {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      padding: 0 16px;
      text-decoration: none;
      color: #ccc;
    }
    a:hover {
      text-decoration: underline;
    }
  }
`;
