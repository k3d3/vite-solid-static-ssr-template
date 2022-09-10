import { createSignal, createEffect } from 'solid-js';

function Counter() {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    console.log("The count is now", count());
  });

  return <button onclick={() => setCount(count() + 1)}>Click Me</button>;
}

export default Counter;
