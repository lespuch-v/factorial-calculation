import React, { useState, useEffect } from 'react';

const MathOperations = () => {
  const [fact, setFact] = useState(0);
  const [valueFromInput, setValueFromInput] = useState(0);
  function decrement() {
    setValueFromInput(valueFromInput - 1);
  }
  function increment() {
    setValueFromInput(valueFromInput + 1);
  }
  function reset() {
    setValueFromInput(0);
  }
  function factorial() {
    let fact = 1;
    for (let i = 1; i <= valueFromInput; i++) {
      fact = fact * i;
    }
    return fact;
  }
  function handleChange(e) {
    const { value } = e.target;
    setValueFromInput(value);
  }

  function randomNumber() {
    setValueFromInput(Math.floor(Math.random() * 100) + 1);
  }

  useEffect(() => {
    setFact(factorial());
  }, [valueFromInput]);

  return (
    <div>
      <div className='your-number-container'>
        <h2>Your number: {valueFromInput}</h2>
      </div>
      <div className="factor-container">
        <h2 className='factor-number'>Factorized number:</h2>
        <h3>{fact}</h3>
      </div>
      <form>
        <label>
          number:
          <input
            placeholder="your awesome number"
            onChange={handleChange}
            type="number"
            name="valueFromInput"
          />
        </label>
      </form>
      <div className="button-containers">
        <button className='button-6 minus' onClick={decrement}>Minus</button>
        <button className='button-6 plus' onClick={increment}>Plus</button>
        <button className='button-6 reset' onClick={reset}>Reset</button>
        <button className='button-6 random-number' onClick={randomNumber}>Random Number</button>

      </div>
    </div>
  );
};

export default MathOperations;
