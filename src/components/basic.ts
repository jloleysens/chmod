import styled from "styled-components";

export const HorizontalSpaceSmall = styled.div`
  width: 0.5em;
`;

export const Pink = styled.span`
  color: pink;
`;

export const Grey = styled.span`
  color: var(--grey);
`;

export const CommandBig = styled.div`
  display: flex;
  font-weight: 400;
  text-align: center;
  color: var(--green);
  margin-top: 0;
  font-size: 5em;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-basis: 500px;
  flex-direction: row;
  justify-content: space-evenly;

  align-items: center;

  margin-top: 3em;
`;

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-grow: 0;
`;

export const CharInput = styled.input`
  color: white;
  text-align: center;
  border: none;
  background-color: transparent;
  font: inherit;

  font-size: 4.8em;
  width: 1em;
  height: 1em;

  margin-left: 0.4em;
  margin-right: 0.4em;

  :focus {
    outline: none;
  }
`;
