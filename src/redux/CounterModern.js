import React , {useEffect} from "react";
import {  useSelector, useDispatch } from "react-redux";
import { increment, decrement, fetchRandomNumber  } from "./actions";

const CounterModern = () => {
  // Usamos useSelector para obtener el estado de Redux
  const count = useSelector((state) => state.count);
  const random = useSelector((state) => state.random);
  // Usamos useDispatch para obtener la función dispatch y despachar las acciones
  const dispatch = useDispatch();


  useEffect(() => {
    // Llamamos a la acción asincrónica al montar el componente
    dispatch(fetchRandomNumber());
  }, [dispatch]);

  return (
    <div>

      <h1>Moderns: {count}</h1>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>

      <h2>Thunk function added: {random}</h2>
      <button onClick={() => dispatch(fetchRandomNumber())}>
        Get Random Number
      </button>
    </div>
  );
};

export default CounterModern;
