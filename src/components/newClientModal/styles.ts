import styled from "styled-components";


export const Container = styled.form`

  overflow-y: scroll;
  max-height: 70vh;
`
export const ClientTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

export const RadioBox = styled.button`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

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