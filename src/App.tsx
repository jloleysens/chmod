import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { KeyCode, MOBILE_SCREEN_THRESHOLD } from './constants';
import { reducer, initialChars } from './reducer';
import * as numericMode from './numeric-mode';

import {
  CommandBig,
  Input,
  AppContainer,
  Pink,
  Grey,
  InputsContainer,
  HorizontalSpaceSmall,
  SymbolDescription,
  Panel,
  PanelContainer,
  HeaderContainer,
  Spacer
} from './components';

const ChmodTitle = styled(CommandBig)`
  @media screen and (max-width: ${MOBILE_SCREEN_THRESHOLD}) {
    justify-content: center;
  }
`;

const FileName = styled(CommandBig)`
  @media screen and (max-width: ${MOBILE_SCREEN_THRESHOLD}) {
    display: none;
  }
`;

const focusFirstInput = () => {
  document.querySelector('input')!.focus();
};

export const App: React.FC = () => {
  const [chars, dispatch] = useReducer(reducer, initialChars);

  const getCharSelector = (idx: number) => () =>
    dispatch({ type: 'select', payload: { idx } });

  useEffect(() => {
    const lrHandler = (eve: KeyboardEvent) => {
      if (KeyCode.left === eve.keyCode) {
        eve.preventDefault();
        dispatch({ payload: undefined, type: 'selectPrevious' });
      } else if (KeyCode.right === eve.keyCode) {
        eve.preventDefault();
        dispatch({ payload: undefined, type: 'selectNext' });
      }
    };
    document.body.addEventListener('keydown', lrHandler);
    return () => document.body.removeEventListener('keydown', lrHandler);
  }, []);

  const getBackspaceHandler = (idx: number) => (
    eve: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const { keyCode } = eve;
    if (keyCode === KeyCode.backspace) {
      if (idx === 0) {
        return;
      }
      if (chars[idx].value) {
        dispatch({ payload: { idx }, type: 'unsetCurrent' });
      } else {
        dispatch({ payload: { idx }, type: 'unsetPrevious' });
      }
    } else if (keyCode >= KeyCode.zero && keyCode <= KeyCode.seven) {
      dispatch({
        type: 'set',
        payload: { idx, value: String.fromCharCode(keyCode) }
      });
    }
  };

  useEffect(() => {
    focusFirstInput();
  }, []);

  const descriptions = numericMode.calculate({
    Owner: chars[0].value,
    Group: chars[1].value,
    Other: chars[2].value
  });

  return (
    <AppContainer>
      <HeaderContainer>
        <ChmodTitle>
          <Pink>❯</Pink>
          <HorizontalSpaceSmall /> chmod
        </ChmodTitle>
        <InputsContainer>
          {chars.map((char, idx) => {
            return (
              <Input
                key={idx}
                onFocus={getCharSelector(idx)}
                onClick={getCharSelector(idx)}
                onKeyDown={getBackspaceHandler(idx)}
                value={char.value}
                selected={char.selected}
              />
            );
          })}
        </InputsContainer>
        <FileName>
          <HorizontalSpaceSmall />
          <Grey> ./file</Grey>
        </FileName>
      </HeaderContainer>
      <Spacer />
      <PanelContainer>
        {Object.entries(descriptions).map(([key, value], idx) => {
          return (
            <Panel key={key}>
              <SymbolDescription
                disabled={!chars[idx].value}
                title={key}
                permissions={value as string}
              />
            </Panel>
          );
        })}
      </PanelContainer>
    </AppContainer>
  );
};
