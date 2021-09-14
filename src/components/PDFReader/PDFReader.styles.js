import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px auto;
  display: grid;
  place-items: center;
  position: relative;

`

export const Content = styled.div`
  box-shadow: 0 30px 40px 0 rgba(16, 36, 94, 0.2);
  border-radius: 20px;

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
    box-shadow: 2px 0px 2px 2px rgba(16, 36, 94, 0.4);
  }

  .buttonContainer:hover {
    opacity: 1;
  }

  button {
    width: 44px;
    height: 44px;
    background: white;
    cursor: pointer;
    font-size: 0.8em;
    border: 0;


  }
`
