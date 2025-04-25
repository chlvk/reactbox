import { data } from "../data";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) return { ...state, people: [] };
  if (action.type === RESET_LIST) return { ...state, people: data };
  if (action.type === REMOVE_ITEM)
    return {
      ...state,
      people: state.people.filter((person) => person.id !== action.payload.id),
    };
  throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;
