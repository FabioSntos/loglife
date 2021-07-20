import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;
  margin: 10px auto;
  
  
  input {
    height: 30px;
    border-radius: 6px;
    border: 1px solid var(--purple-light);
    outline: var(--purple);
    padding-left: 5px;
    width: 400px;
    transition: .2s;

    &:focus,
    &:hover {
      outline: none;
      border-color:var(--purple);
      box-shadow: 0 0 0 3px rgb(105, 51, 255,0.2);
    }
  
  }
` 