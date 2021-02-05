import { combineReducers } from 'redux';
import ThemeReducer from "../reducers/ThemeReducer";

const reducer = combineReducers({
    ThemeReducer,
});
export default reducer;
export type RootState = ReturnType<typeof reducer>