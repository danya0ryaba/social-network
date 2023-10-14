import { combineReducers, applyMiddleware, legacy_createStore as createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import { appReducer } from "./app-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

export type RootState = ReturnType<typeof reducers>


export const store_redux = createStore(reducers, applyMiddleware(thunkMiddleware))

