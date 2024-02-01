export type UnknownList = unknown[];

type CallbackFunc<Tlist extends UnknownList, TFinalValue> = (
  item: Tlist[number],
  index: number,
  list: Tlist
) => TFinalValue;

const map = <
  TList extends UnknownList,
  TFunc extends CallbackFunc<TList, ReturnType<TFunc>>
>(
  list: TList,
  func: TFunc
) => {
  const result = [];

  for (let i = 0; i < list.length; i++) {
    result.push(func(list[i], i, list));
  }

  return result;
};

const students = [
  { name: "Pooria", grade: 18.5 },
  { name: "Ali", grade: 9 },
];

const studentsWithId = map(students, (student, index, list) => ({
  ...student,
  id: Math.random(),
}));
