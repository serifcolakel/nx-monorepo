import { useCallback } from 'react';
import { shallowEqual } from 'react-redux';

import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice';

import { useAppDispatch, useAppSelector } from './useStoreHooks';

export default function useCounterActions() {
  const counterState = useAppSelector((state) => state.counter, shallowEqual);
  const dispatch = useAppDispatch();

  const handleIncrement = useCallback(
    () => {
      dispatch(increment());
    },
    [ dispatch ],
  );

  const handleDecrement = useCallback(
    () => {
      dispatch(decrement());
    },
    [ dispatch ],
  );

  const handleIncrementByAmount = useCallback(
    (amount: number) => {
      dispatch(incrementByAmount(amount));
    },
    [ dispatch ],
  );

  return {
    handleIncrement,
    handleDecrement,
    handleIncrementByAmount,
    counterState,
  };
}
