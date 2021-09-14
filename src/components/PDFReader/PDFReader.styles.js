import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px auto;
  display: grid;
  place-items: center;
  position: relative;

`

export const Content = styled.div`
  box-shadow: 0 30px 40px 0 rgba(16, 36, 94, 0.2);

  .buttonContainer {
    background: white;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.2;
    transition: opacity ease-in-out 0.5s;
    border-radius: 4px;
  }

  .buttonContainer:hover {
    opacity: 1;
  }
`
