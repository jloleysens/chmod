import styled, { AnyStyledComponent } from 'styled-components';
import { MOBILE_SCREEN_THRESHOLD } from '../constants';

export const HorizontalSpaceSmall = styled.div`
  width: 0.5rem;
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
  flex-direction: column;
  justify-content: space-evenly;

  align-items: center;

  margin-top: 25vh;
  @media screen and (max-width: ${MOBILE_SCREEN_THRESHOLD}) {
    margin-top: 2vh;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-grow: 0;
  position: sticky;
`;

export const BoxShadowFocusContainer = styled.div<{ active: boolean }>`
  height: 4rem;
  box-shadow: 0 0.2rem 0 0 ${props => (props.active ? 'white' : 'transparent')};
  margin-top: 0.6rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const CharInput = styled.input`
  color: white;
  text-align: center;
  border: none;
  background-color: transparent;
  font: inherit;

  font-size: var(--big-font-size);
  width: var(--big-font-size);
  height: var(--big-font-size);

  :focus {
    outline: none;
  }
`;

const mobileFlexRowToColumn = (component: AnyStyledComponent) => styled(
  component
)`
  @media screen and (max-width: ${MOBILE_SCREEN_THRESHOLD}) {
    flex-direction: column;
  }
`;

export const HeaderContainer = mobileFlexRowToColumn(
  styled.div`
    display: flex;
    flex-direction: row;
  `
);

export const PanelContainer = mobileFlexRowToColumn(
  styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  `
);

export const Panel = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
`;

export const Spacer = styled.div`
  height: 1rem;
`;
