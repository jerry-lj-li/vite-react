import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '@/features/counter/counterSlice';

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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
