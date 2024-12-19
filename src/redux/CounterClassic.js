// Classic
// mapStateToProps: Obtiene el estado de Redux y lo conecta al componente como props.
// mapDispatchToProps: Conecta las funciones que despachan acciones a los props del componente.
// connect(): Conecta el componente React al store de Redux utilizando estas funciones.

import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Classic Redux: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

// mapStateToProps: conecta el estado de Redux al componente React
const mapStateToProps = (state) => ({
  count: state.count,
});

// mapDispatchToProps: conecta las acciones de Redux al componente React
const mapDispatchToProps = {
  increment,
  decrement,
};

// // Conectar Redux con React
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
