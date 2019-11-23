import { Reducer } from "react";

export const initialChars = [
  { value: "", selected: true },
  { value: "", selected: false },
  { value: "", selected: false }
];

export type State = typeof initialChars;

export type Action =
  | { type: "set"; payload: { idx: number; value: string } }
  | { type: "unsetCurrent"; payload: { idx: number } }
  | { type: "unsetPrevious"; payload: { idx: number } }
  | { type: "select"; payload: { idx: number } };

export const reducer: Reducer<State, Action> = (chars, action) => {
  if (action.type === "set") {
    const { idx, value } = action.payload;
    return chars.map((char, cIdx) => {
      if (idx === cIdx) {
        return {
          ...char,
          value,
          selected: idx === chars.length - 1
        };
      }

      if (idx + 1 === cIdx) {
        return {
          ...char,
          selected: true
        };
      }

      return {
        ...char,
        selected: false
      };
    });
  }

  if (action.type === "unsetCurrent") {
    const { idx } = action.payload;
    return chars.map((char, cIdx) => {
      const selected = cIdx === idx;
      return {
        ...char,
        selected,
        value: selected ? "" : char.value
      };
    });
  }

  if (action.type === "unsetPrevious") {
    const { idx } = action.payload;
    return chars.map((char, cIdx) => {
      const selected = idx - 1 === cIdx;
      return {
        ...char,
        value: selected ? "" : char.value,
        selected
      };
    });
  }

  if (action.type === "select") {
    const { idx } = action.payload;
    return chars.map((char, cIdx) => {
      return {
        ...char,
        selected: idx === cIdx
      };
    });
  }

  throw new Error(`Unknown action ${action}`);
};
