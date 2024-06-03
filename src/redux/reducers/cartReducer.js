import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, INCREASE_QUANTITY, DECREASE_QUANTITY  } from '../actions/cartActions';
const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }]
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };
      case INCREASE_QUANTITY:
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      case DECREASE_QUANTITY:
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
          )
        };
    default:
      return state;
  }
};

export default cartReducer;