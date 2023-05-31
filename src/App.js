import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const num1Change = (e) => {
    setNum1(e.target.value);
  };
  const num2Change = (e) => {
    setNum2(e.target.value);
  };
  const numbersPlus = () => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };
  const numbersMinus = () => {
    const difference = Number(num1) - Number(num2);
    setResult(difference);
  };
  const numbersClear = () => {
    setResult(0);
    setNum1('');
    setNum2('');
  };
  return (
    <div>
      <h4>Введите первое число</h4>
      <input type="number" value={num1} onChange={num1Change} />
      <h4>Введите второе число</h4>
      <input type="number" value={num2} onChange={num2Change} />
      <button onClick={numbersPlus}>+</button>
      <button onClick={numbersMinus}>-</button>
      <button onClick={numbersClear}>Clear</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default Calculator;