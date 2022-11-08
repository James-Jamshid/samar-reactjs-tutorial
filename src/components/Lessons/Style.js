import styled from "styled-components"
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  p {
    color: red;
  }

  h1 {
    font-size: xx-large;
    font-style: bold;
    font-family: sans-serif;
  }
  input {
    font-size: larger;
    width: 300px;
    height: 60px;
    padding-left: 10px;
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;
  }
  button {
    font-size: larger;
    color: white;
    width: 80px;
    height: 60px;
    cursor: pointer;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;

    background-color: darkgreen;
  }
`
