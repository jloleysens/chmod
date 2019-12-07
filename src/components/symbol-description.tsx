import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  permissions: string;
  disabled: boolean;
}

const DisableableContainer = styled.div<{ disabled: boolean }>`
  display: flex;
  width: 100%;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 3px;
  flex-direction: column;
  background-color: var(--purple-blue-darker);
  text-align: center;
  color: ${({ disabled }) => (disabled ? "var(--grey)" : "white")};
  transition: color 2s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const Heading = styled.h2`
  font-size: 2rem;
`;

const SubHeading = styled.h3`
  font-size: 1.4rem;
`;

const DisableableDescription = styled.p<{ disabled: boolean }>`
  font-size: 1rem;
  white-space: pre-wrap;
  color: ${({ disabled }) => (disabled ? "var(--grey)" : "white")};
  transition: color 2s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const r = `read the file`;
const w = `write new content to the file`;
const x = `access the contents of the file as an executable`;

export const SymbolDescription = ({ title, disabled, permissions }: Props) => {
  return (
    <DisableableContainer disabled={disabled}>
      <Heading>{title}</Heading>
      <SubHeading>{permissions}</SubHeading>
      <DisableableDescription disabled={!~permissions.indexOf("r")}>
        {r}
      </DisableableDescription>
      <DisableableDescription disabled={!~permissions.indexOf("w")}>
        {w}
      </DisableableDescription>
      <DisableableDescription disabled={!~permissions.indexOf("x")}>
        {x}
      </DisableableDescription>
    </DisableableContainer>
  );
};
