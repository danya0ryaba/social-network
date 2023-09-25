import { combineReducers, legacy_createStore as createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { usersReducer } from "./users-reducer";

// надо как-то передать не  state, а весь сторе целиком

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});
// отсебятина
export type RootState = ReturnType<typeof reducers>
export const store_redux = createStore(reducers)
