import { combineReducers, legacy_createStore as createStore } from "redux";
import { store } from "./store";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { usersReducer } from "./users-reducer";

// надо как-то передать не  state, а весь сторе целиком

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

export const store_redux = createStore(reducers)

