
import { SET_PRODUCTS, ADD_TO_CART, INCREASE_QUANTITY, DECREMENT_QUANTITY, SET_CART,REMOVE_FROM_CART } from "./actions";

const initialState = {
  products: [],
  cart: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, loading: false, products: action.payload };

   
   case ADD_TO_CART: {
     const product = action.payload;
 
  const exists = state.cart.find(item => item.id === product.id);

  if (exists) {
  
    return {  ...state,  cart: state.cart.map(item =>   item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item ),
    };
  } else {
   
    return { ...state, cart: [...state.cart, { ...product, quantity: 1 }], };
  }
}


    case INCREASE_QUANTITY:
      return {...state,  cart: state.cart.map((item) =>  item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item ),
      };

    case DECREMENT_QUANTITY:
      return {...state,cart: state.cart
          .map((item) => (item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item))
          .filter((item) => item.quantity > 0),
      };

    case SET_CART: 
      return {
        ...state,
        cart: Array.isArray(action.payload) ? action.payload : state.cart,
      };


      

case REMOVE_FROM_CART:
    return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
    };





    default:
      return state;
  }
};
