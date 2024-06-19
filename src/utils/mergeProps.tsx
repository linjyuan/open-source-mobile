export function mergeProps<A, B>(a: A, b: B): A & B;
export function mergeProps<A, B, C>(a: A, b: B, c: C): A & B & C;
export function mergeProps(...arg: any[]) {
  const res: any = {};
  arg.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (item[key] !== undefined) res[key] = item[key];
    });
  });
  return res;
}
