import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addValue } from "../../store/module/counter/actions";

export const Card = () => {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.counter);
  const [count, setCount] = useState(value);
  console.log(value );

  useEffect(() => {
    dispatch(addValue(count));
  },[count,dispatch]);
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setCount((value) => value + 1)}>+</button>
      <button onClick={() => setCount((value) => value - 1)}>-</button>
    </div>
  );
};

