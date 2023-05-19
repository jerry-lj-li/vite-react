export const sortArr = (a: number, b: number) => {
  return a - b;
};
const arr = [3600, 5010, 10100, 801]; //进行正序排序
arr.sort(sortArr);
console.log(arr, '正序');
export const sortArr1 = (a: number, b: number) => {
  return b - a;
};
const arr1 = [3600, 5010, 10100, 801]; //进行倒序排序
arr1.sort(sortArr1);
console.log(arr1, '倒叙');
