import { createContext } from "react";
import { useReducer } from "react";

export const CreateContext = createContext({
  items: {},
  handleAddItemstoCart: () => {},
  increaseItem: () => {},
  decreaseItem: () => {},
});

function shoppingCartReducer(state, action) {
  if (action.type == "ADD_ITEM") {
    let myItemArray = state.find((i) => i.title == action.payload.title);
    if (myItemArray) {
      let ind = state.findIndex((i) => i.title == action.payload.title);
      let newState = [...state];
      newState[ind].quantity++;
      return newState;
    } else
      return [
        ...state,
        {
          title: action.payload.title,
          image: action.payload.image,
          quantity: action.payload.quantity,
          price: action.payload.price,
        },
      ];
  }

  if (action.type === "INCREASE_ITEM") {
    let index = state.findIndex((i) => i.title == action.payload.title);
    let newState = [...state];
    newState[index].quantity++;
    return newState;
  }

  if (action.type === "DECREASE_ITEM") {
    let index = state.findIndex((i) => i.title == action.payload.title);
    if (state[index].quantity == 1) {
      let newState = state.filter((i) => i.title != action.payload.title);
      return newState;
    }
    let newState = [...state];
    newState[index].quantity--;
    return newState;
  }

  return state;
}

export default function CreateContextProvider({ children }) {
  const [shoppingCart, dispatch] = useReducer(shoppingCartReducer, []);

  function handleAddItemstoCart(title, image, quantity, price) {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        title,
        image,
        quantity,
        price,
      },
    });
  }

  function handleIncreaseQuantity(title) {
    dispatch({
      type: "INCREASE_ITEM",
      payload: {
        title,
      },
    });
  }

  function handleDecreaseQuantity(title) {
    dispatch({
      type: "DECREASE_ITEM",
      payload: {
        title,
      },
    });
  }

  let CartCntx = {
    items: shoppingCart,
    addItemstoCart: handleAddItemstoCart,
    increaseItem: handleIncreaseQuantity,
    decreaseItem: handleDecreaseQuantity,
  };
  return (
    <CreateContext.Provider value={CartCntx}>{children}</CreateContext.Provider>
  );
}
