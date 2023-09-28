// import { dialogsReducer } from "./dialogs-reducer"
// import { profileReducer } from "./profile-reducer"

// // Я ДОПИСАЛ В STORE МЕТОД GETSTORE И ТИПИЗАЦИЯ К НЕМУ В StoreType(ВРОДЕ НЕ ПРАВИЛЬНО)
// export type StoreType = {
//     _state: StateType
//     _callSubscriber: (_state: StateType) => void

//     getState: () => StateType
//     getStore: () => StoreType
//     subscriber: (observer: Function) => void

//     dispatch: (action: any) => void
// }
// export type StateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
// }
// export type ProfilePageType = {
//     post: PostsType
//     newPostText: string,
//     profile: null
// }
// export type DialogsPageType = {
//     messages: MessagesType
//     newMessageBody: string
//     dialogs: DialogsType
// }
// export type DialogsItemType = {
//     name: string
//     id_to: number
// }
// export type DialogsType = DialogsItemType[]
// export type MessagesType = MessagesItemType[]
// export type MessagesItemType = {
//     message: string
//     id: number
// }
// export type PostItemType = {
//     message?: string
//     id: number
//     like: number
// }
// export type PostsType = Array<PostItemType>

// // ================= STORE ================= //
// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             post: [
//                 { message: 'Way of the samurai', id: 1, like: 20 },
//                 { message: 'React kabzda kak prostoax', id: 2, like: 0 }
//             ],
//             newPostText: '',
//             profile: null
//         },
//         dialogsPage: {
//             messages: [
//                 { message: 'Hi', id: 1 },
//                 { message: 'How,are you?', id: 2 },
//                 { message: 'React way of samurai', id: 3 },
//                 { message: 'Busido', id: 4 },
//                 { message: 'Sensei', id: 5 },
//             ],
//             dialogs: [
//                 { name: 'danya', id_to: 1 },
//                 { name: 'Max', id_to: 2 },
//                 { name: 'Lisa', id_to: 3 },
//                 { name: 'Sergey', id_to: 4 },
//                 { name: 'Victor', id_to: 5 }
//             ],
//             newMessageBody: ''
//         }
//     },
//     getState() {
//         return store._state;
//     },
//     getStore() {
//         return this
//     },
//     _callSubscriber(_state: StateType) {
//         console.log('state was change')
//     },
//     subscriber(observer: any) {
//         this._callSubscriber = observer
//     },
//     dispatch(action: any) {
//         // ================= PROFILE ================= //
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         // ================= DIALOGS ================= //
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         // ================= RENDER ================= //
//         this._callSubscriber(this._state)
//     }
// }
// // ================= FUNCTION ACTION_CREATOR ================= //

import React from 'react'

export const store = () => {
    return (
        <div>store</div>
    )
}
