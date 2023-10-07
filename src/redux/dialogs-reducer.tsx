const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

// ==================== ТИПИЗАЦИЯ STATE ==================== //
export type DialogsPageType = {
    messages: MessagesItemType[]
    dialogs: DialogsItemType[]
}
export type MessagesItemType = {
    message: string
    id: number
}
export type DialogsItemType = {
    name: string
    id_to: number
}

// ==================== ТИПИЗАЦИЯ ACTION ==================== //
type SendMessageACType = {
    type: 'SEND_MESSAGE'
    message: string
}
type UpdateNewMeessageACType = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    body: string
}
type ActionType = UpdateNewMeessageACType | SendMessageACType

const initialState: DialogsPageType = {
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
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return { ...state, newMessageBody: action.body }
        case SEND_MESSAGE:
            const newMessage = { message: action.message, id: state.messages.length + 1 }
            return { ...state, messages: [...state.messages, newMessage] }
        default:
            return state;
    }
}

// ========== ACTION-CREATOR ========== //
export const sendMessageCreator = (message: string) => ({ type: SEND_MESSAGE, message })

export const updateNewMeessageBodyCreator = (body: string) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
}