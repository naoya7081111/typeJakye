/* eslint-disable @typescript-eslint/no-unused-vars */

//TypeScriptの型

// boolean
let bool: boolean = true;

// Number 数値
let num: number = 0;

// String 文字
let str: string = "A";

// Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple
let tuple: [number, string] = [0, "A"];

// any なんでも屋さん
let any1: any = false;

// void 引数に何も渡していないとき
const funcA = (): void => {
  const test = "test";
};

// null
let null1: null = null;

// undfined
let undfined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "尚也" };
