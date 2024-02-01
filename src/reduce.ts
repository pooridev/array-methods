export type UnknownList = unknown[];

type Reducer<TArray extends UnknownList, TAccumulated> = (
  accumulated: TAccumulated,
  item: TArray[number],
  index: number,
  array: TArray
) => TAccumulated;

function reduce<TArray extends UnknownList, TInitialValue>(
  array: TArray,
  reducer: Reducer<TArray, TInitialValue>,
  initialValue: TInitialValue
) {
  let accumulated = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulated = reducer(accumulated, array[i], i, array);
  }

  return accumulated;
}

console.log(
  reduce(
    [2, 3, 4, 5],
    (sum, item) => {
      return item + sum;
    },
    0
  )
);
