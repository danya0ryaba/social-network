import React, { ChangeEvent, RefObject } from "react";
import { S } from './dialogs_style'
import { DialogItem } from "./dialogitem/DialogItem";
import { Message } from "./message/Message";
import { DialogsType, MessagesType } from '../../redux/store'
import { sendMessageCreator, updateNewMeessageBodyCreator } from "../../redux/dialogs-reducer";


type PropsType = {
    dialogs: DialogsType
    messages: MessagesType
    newMessageBody: string
    dispatch: (action: any) => void
}


export const Dialogs = (props: PropsType) => {

    let renderDialogsItem = props.dialogs.map(elem => <DialogItem name={elem.name} id_to={elem.id_to} />)
    let renderMessageItem = props.messages.map(elem => <Message message={elem.message} />)



    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    const onNewMeessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMeessageBodyCreator(e.currentTarget.value))
    }
    return (
        <S.DialogsWrapper>
            <S.DialogsItem>
                {renderDialogsItem}
            </S.DialogsItem>

            <S.Messages>
                {renderMessageItem}

                <textarea value={props.newMessageBody} onChange={onNewMeessageChange} />

                <button onClick={onSendMessageClick}>send</button>
            </S.Messages>
        </S.DialogsWrapper >
    )
}