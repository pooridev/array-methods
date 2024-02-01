export type UnknownList = unknown[];

type PredicateFunc<TList extends UnknownList> = (
  item: TList[number],
  index: number,
  list: TList
) => boolean;

const filter = <TList extends UnknownList, TFunc extends PredicateFunc<TList>>(
  array: TList,
  func: TFunc
) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result as TList;
};

// Fully type-safe
const passedStudents = filter(
  [
    { name: "Pooria", grade: 18.5 },
    { name: "Ali", grade: 9 },
  ],
  (item, index, array) => item.grade >= 10
);
