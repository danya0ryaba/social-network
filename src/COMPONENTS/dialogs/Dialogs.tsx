import React, { ChangeEvent, RefObject } from "react";
import { S } from './dialogs_style'
import { DialogItem } from "./dialogitem/DialogItem";
import { Message } from "./message/Message";
import { DialogsType, MessagesType } from '../../redux/store'
import { sendMessageCreator, updateNewMeessageBodyCreator } from "../../redux/dialogs-reducer";


type PropsType = {
    updateNewMessage: (body: string) => void
    dialogsPage: any
    sendMessageClick: () => void
}
type DialogsItemType = {
    name: string
    id_to: number
}
type MessagesItemType = {
    message: string
    id: number
}

export const Dialogs = (props: PropsType) => {

    let renderDialogsItem = props.dialogsPage.dialogs.map((elem: DialogsItemType) => <DialogItem key={elem.id_to} name={elem.name} id_to={elem.id_to} />)
    let renderMessageItem = props.dialogsPage.messages.map((elem: MessagesItemType) => <Message key={elem.id} message={elem.message} />)

    const onSendMessageClick = () => {
        props.sendMessageClick()
    }

    const onNewMeessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        props.updateNewMessage(body)
    }
    return (
        <S.DialogsWrapper>
            <S.DialogsItem>
                {renderDialogsItem}
            </S.DialogsItem>

            <S.Messages>
                {renderMessageItem}

                <textarea value={props.dialogsPage.newMessageBody} onChange={onNewMeessageChange} />

                <button onClick={onSendMessageClick}>send</button>
            </S.Messages>
        </S.DialogsWrapper >
    )
}