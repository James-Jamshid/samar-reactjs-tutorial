import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: #1a0f0a;
  color: white;
  /* position: fixed; */
  div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  button {
    width: 150px;
    height: 60px;
    cursor: pointer;
    border-radius: 16px;
  }
  button:hover {
    background-color: grey;
  }
`
