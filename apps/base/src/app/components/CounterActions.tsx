import { useCounterActions } from '@webpack-nx-mehrzweck/data';

export default function CounterActions() {
  const {
    handleDecrement,
    handleIncrement,
    handleIncrementByAmount,
    counterState,
  } = useCounterActions();

  return (
    <div className="flex flex-col w-full gap-y-4">
      <h1 className="text-center">Welcome to base! {counterState.value}</h1>
      <div className="flex items-center justify-center w-full gap-4">
        <button
          className="px-4 py-2 text-white bg-green-500 rounded-md"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 text-white bg-red-500 rounded-md"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-white rounded-md"
          onClick={() => handleIncrementByAmount(5)}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
}
