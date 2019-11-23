import React, { useEffect, useReducer } from "react";

import { reducer, initialChars } from "./reducer";

import {
  CommandBig,
  Input,
  AppContainer,
  Pink,
  Grey,
  InputsContainer,
  HorizontalSpaceSmall
} from "./components";

const focusFirstInput = () => {
  document.querySelector("input")!.focus();
};

export const App: React.FC = () => {
  const [chars, dispatch] = useReducer(reducer, initialChars);

  const getCharSelector = (idx: number) => () =>
    dispatch({ type: "select", payload: { idx } });

  const getBackspaceHandler = (idx: number) => (
    eve: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const { keyCode } = eve;
    if (keyCode === 8 /* backspace */) {
      if (idx === 0) {
        return;
      }
      if (chars[idx].value) {
        dispatch({ payload: { idx }, type: "unsetCurrent" });
      } else {
        dispatch({ payload: { idx }, type: "unsetPrevious" });
      }
    } else if (keyCode >= 48 && keyCode <= 57) {
      dispatch({
        type: "set",
        payload: { idx, value: String.fromCharCode(keyCode) }
      });
    }
  };

  useEffect(() => {
    focusFirstInput();
  }, []);

  return (
    <AppContainer>
      <CommandBig>
        <Pink>❯</Pink>
        <HorizontalSpaceSmall /> chmod
      </CommandBig>
      <InputsContainer>
        {chars.map((char, idx) => {
          return (
            <Input
              key={idx}
              onClick={getCharSelector(idx)}
              onKeyDown={getBackspaceHandler(idx)}
              value={char.value}
              selected={char.selected}
            />
          );
        })}
      </InputsContainer>
      <CommandBig>
        <HorizontalSpaceSmall />
        <Grey> ./file</Grey>
      </CommandBig>
    </AppContainer>
  );
};
