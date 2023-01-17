import styled from "styled-components";

const FormControl = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  & label {
    margin: 10px;
  }

  & input {
    padding: 10px;
    margin: 0 15px 10px;
    font-size: 16px;
    border: 1px dashed black;

    &: hover {
      border: 2px dashed black;
    }
  }

  & button {
    background: darkslategray;
    padding: 10px;
    width: 100px;
    font-size: 16px;
    color: white;
    cursor: pointer;
    margin: 0 auto;

    &: hover {
      background: black;
      color: white;
    }
  }
`;

export default FormControl;