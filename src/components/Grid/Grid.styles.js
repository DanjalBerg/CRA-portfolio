import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 20px;
`

export const Content = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 3rem;

  .title-items {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;
    min-height: 100px;
    border-radius: 20px;


  }
`
