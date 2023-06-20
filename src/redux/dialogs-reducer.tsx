import { DialogsPageType } from "./store"

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const dialogsReducer = (state: DialogsPageType, action: { type: string, body: string }) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            const body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({ message: body, id: state.messages.length + 1 })
            return state
        default:
            return state;
    }
}

// ========== ACTION-CREATOR ========== //
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMeessageBodyCreator = (body: string) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
}