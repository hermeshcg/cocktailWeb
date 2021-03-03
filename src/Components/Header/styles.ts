import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px;
  background: none;
  position: sticky;
  top: 0;

  aside {
    border: 1px solid #cfcfcf;
    border-radius: 8px;
    padding: 8px;
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
    transition: 500ms;
  }
  aside:hover {
    background: #cfcfcf;
    a {
      color: #121212;
    }
  }
`;
