import { createStore } from "redux";
import reducer from "./reducers";

const initialState = {
    reservations: [],
    totalPrice: 0
};

const store = createStore(reducer, initialState);

export default store;