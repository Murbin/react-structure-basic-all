// actions.js
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET_RANDOM = "SET_RANDOM";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const setRandom = (number) => ({
  type: SET_RANDOM,
  payload: number,
});

// Acción asincrónica con Redux Thunk
export const fetchRandomNumber = () => {
  return async (dispatch) => {
    try {
      // Simulando una llamada API con un número aleatorio
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve(Math.floor(Math.random() * 100)), 1000)
      );
      dispatch(setRandom(response)); // Despachamos la acción con el número aleatorio
    } catch (error) {
      console.error("Error fetching random number", error);
    }
  };
};
