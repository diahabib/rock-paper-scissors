/* eslint-disable @typescript-eslint/no-explicit-any */
type FuncNoParams = () => void;
type FuncWithTwoParams = (str1: any, str2: any) => void;
//type FuncWithOneParam = <T>(str1: T) => void;
type FuncWithOneParam = (str1: any) => void;

type RockPaperScissors = {
  id: number;
  name: string;
  image: string;
};

export type {
  FuncNoParams,
  FuncWithTwoParams,
  FuncWithOneParam,
  RockPaperScissors,
};
