import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number | undefined>(0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    if (!target.value) {
      setCounter(undefined);
    }
    const value = Number(target.value);
    if (value) {
      setCounter(value);
    }
  };

  const addOne = () => {
    counter !== undefined ? setCounter(counter + 1) : setCounter(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={counter} onChange={handleChange} />
      <button onClick={addOne}>Ajouter 1</button>
      <button type="submit" role="button">
        Envoyer
      </button>
    </form>
  );
};
export default Counter;
