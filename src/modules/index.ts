import { combineReducers } from 'redux';
import { ThemeReducer, CategoryReducer } from "../reducers";

const reducer = combineReducers({
    ThemeReducer, CategoryReducer
});
export default reducer;
export type RootState = ReturnType<typeof reducer>