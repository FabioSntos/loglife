import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.form`

  overflow-y: scroll;
  max-height: 70vh;

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    border-radius: 0.25rem;
    color: #fff;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.3s;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
export const ClientTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green"
}
const color = {
  green: "#33cc95"
}
export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

   background: ${(props) =>
    props.isActive
      ? transparentize(0.9, color[props.activeColor])
      : "transparent"};


  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-tile);
  }

`

export const ClientvehicleContainer = styled.div `
margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
`