import pipe from "ramda/es/pipe";
import compose from "ramda/es/compose";
import map from "ramda/es/map";
import into from "ramda/es/into";

type SymbolType = "r" | "w" | "x" | "-";

type Tuple<A, B = A> = [A, B];

const toNumber = ([l, s]: Tuple<string>): Tuple<string, number> => [
  l,
  isNaN(+s) ? 0 : +s
];

const assocs = [
  { c: 4, v: "r" },
  { c: 2, v: "w" },
  { c: 1, v: "x" }
];

const transformNumberCodeToString = ([l, n]: Tuple<string, number>): Tuple<
  string,
  string
> => {
  if (n > 7 || n < 0) throw Error(`${n} is not allowed. Only 0-7.`);
  let acc: SymbolType[] = [];
  for (const { c, v } of assocs) {
    if (n >= c) {
      n -= c;
      acc.push(v as SymbolType);
    } else {
      acc.push("-");
    }
  }
  return [l, acc.join("")];
};

const xform = compose(map(toNumber), map(transformNumberCodeToString) as any);

export const calculate = pipe(
  Object.entries,
  into([], xform),
  Object.fromEntries
);
