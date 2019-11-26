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
  font-size: var(--big-font-size);
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

export const BoxShadowFocusContainer = styled.div<{ active: boolean }>`
  height: 6em;
  box-shadow: 0 0.2em 0 0 ${props => (props.active ? "white" : "transparent")};
  margin-top: 1em;
  margin-left: 1em;
  margin-right: 1em;
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

  :focus {
    outline: none;
  }
`;
