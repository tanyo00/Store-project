import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

let lastId = 0;
export default function reducer(state = [], action) {
  if (action.type === ADD_ITEM) {
    return [
      ...state,
      {
        id: ++lastId,
        brand: action.payload.brand,
        type: action.payload.type,
        price: action.payload.price,
        image: action.payload.image,
        size: action.payload.size,
      },
    ];
  } else if (action.type === REMOVE_ITEM) {
    return state.filter((item) => item.id !== action.payload.id);
  } else {
    return state;
  }
}
