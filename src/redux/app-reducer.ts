import { getAuthUserData } from "./auth-reducer"

const SET_SUCCESS = 'SET_SUCCESS'

type InitialStateType = {
    initialized: boolean
}
const initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        case SET_SUCCESS:
            return { ...state, initialized: true }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({ type: 'SET_SUCCESS' })

export const initializeApp = () => (dispatch: any) => {
    dispatch(getAuthUserData()).then(() => {
        dispatch(initializedSuccess())
    })

}