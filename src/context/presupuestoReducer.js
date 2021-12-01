import { ADD_PRESUPUESTO } from "../types";

const presupuestoReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRESUPUESTO:
      return {
        ...state,
        ticket: action.payload,
      };

    default:
      return state;
  }
};

export default presupuestoReducer;
