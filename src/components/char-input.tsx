import React, { useRef, useEffect } from "react";
import { CharInput, BoxShadowFocusContainer } from ".";

export interface Props {
  onKeyDown: (ev: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick: (ev: React.MouseEvent<HTMLInputElement>) => void;
  value: string;
  selected: boolean;
}

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

  return (
    <BoxShadowFocusContainer active={selected}>
      {render()}
    </BoxShadowFocusContainer>
  );
};
