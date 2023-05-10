import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '@/features/counter/counterSlice';

export const Counter = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  const sortArr = (a: number, b: number) => {
    return a - b;
  };
  const arr = [3600, 5010, 10100, 801]; //进行正序排序
  arr.sort(sortArr);
  console.log(arr, '正序');
  const sortArr1 = (a: number, b: number) => {
    return b - a;
  };
  const arr1 = [3600, 5010, 10100, 801]; //进行倒序排序
  arr1.sort(sortArr1);
  return (
    <div className="card">
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment count is {count}
      </button>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement count is {count}
      </button>
    </div>
  );
};
