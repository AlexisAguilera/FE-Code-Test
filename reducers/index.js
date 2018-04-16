import { combineReducers } from "redux";

import cocktailReducer from "./CocktailReducer";
import SelectionReducer from "./SelectionReducer";
import AppReducer from "./AppReducer";

const rootReducer = combineReducers({
    cocktails: cocktailReducer,
    selectedCocktailId: SelectionReducer,
    appReducer: AppReducer
});

export default rootReducer;
