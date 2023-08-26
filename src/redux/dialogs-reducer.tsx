import { DialogsPageType } from "./store"

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
    messages: [
        { message: 'Hi', id: 1 },
        { message: 'How,are you?', id: 2 },
        { message: 'React way of samurai', id: 3 },
        { message: 'Busido', id: 4 },
        { message: 'Sensei', id: 5 },
    ],
    dialogs: [
        { name: 'danya', id_to: 1 },
        { name: 'Max', id_to: 2 },
        { name: 'Lisa', id_to: 3 },
        { name: 'Sergey', id_to: 4 },
        { name: 'Victor', id_to: 5 }
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: { type: string, body: string }) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return { ...state, newMessageBody: action.body }
        case SEND_MESSAGE:
            const newMessage = { message: state.newMessageBody, id: state.messages.length + 1 }
            return { ...state, messages: [...state.messages, newMessage], newMessageBody: '' }
        default:
            return state;
    }
}

// ========== ACTION-CREATOR ========== //
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMeessageBodyCreator = (body: string) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
}