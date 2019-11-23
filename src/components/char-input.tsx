import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { CharInput } from ".";

export interface Props {
  onKeyDown: (ev: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick: (ev: React.MouseEvent<HTMLInputElement>) => void;
  value: string;
  selected: boolean;
}

const BoxShadowFocusContainer = styled.div`
  height: 5.3em;
  box-shadow: 0 0.2em 0 0 white;
`;

export const Input = ({ onKeyDown, onClick, value, selected }: Props) => {
  const refInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (selected && refInput.current) {
      refInput.current.focus();
    }
  }, [selected]);

  const render = () => (
    <CharInput
      ref={refInput}
      maxLength={1}
      onChange={() => {}}
      onKeyDown={onKeyDown}
      onClick={onClick}
      type="text"
      value={value}
    />
  );

  if (selected) {
    return <BoxShadowFocusContainer>{render()}</BoxShadowFocusContainer>;
  }
  return render();
};
