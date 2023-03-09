import { combineReducers } from "redux";
import navbarReducer from "./navbarReducer";
import shoppingMallReducer from "./shoppingMallReducer";
import productsForYouReducer from "./productsForYouReducer";

const rootReducer = combineReducers({
    navbar: navbarReducer,
    shoppingmall: shoppingMallReducer,
    productsForYou: productsForYouReducer,
});

export default rootReducer;