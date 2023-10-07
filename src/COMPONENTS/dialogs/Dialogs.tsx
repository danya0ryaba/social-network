import React from "react";
import { S } from './dialogs_style'
import { DialogItem } from "./dialogitem/DialogItem";
import { Message } from "./message/Message";
import { Navigate } from "react-router-dom";
import { Form, Formik, Field } from "formik";


type PropsType = {
    dialogsPage: any
    isAuth: boolean
    sendMessageClick: (value: string) => void
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

    if (!props.isAuth) {
        return <Navigate to='/login' />
    }
    let renderDialogsItem = props.dialogsPage.dialogs.map((elem: DialogsItemType) => <DialogItem key={elem.id_to} name={elem.name} id_to={elem.id_to} />)
    let renderMessageItem = props.dialogsPage.messages.map((elem: MessagesItemType) => <Message key={elem.id} message={elem.message} />)

    const onSendMessageClick = (value: string) => props.sendMessageClick(value)

    return (
        <S.DialogsWrapper>

            <S.DialogsItem>
                {renderDialogsItem}
            </S.DialogsItem>

            <S.Messages>
                {renderMessageItem}
                <FormDialog onSendMessageClick={onSendMessageClick} />
            </S.Messages>

        </S.DialogsWrapper >
    )
}



type FormDialogType = {
    onSendMessageClick: (value: string) => void
}
const FormDialog: React.FC<FormDialogType> = ({ onSendMessageClick }) => {
    return (<div>
        <Formik initialValues={{ message: '' }} onSubmit={value => onSendMessageClick(value.message)}>
            {({ errors, touched }) => (<Form>
                <label htmlFor="message">Введите текст</label>
                <Field component="textarea" name="message" id="message" />
                <div>
                    <button type="submit">отправить</button>
                </div>
            </Form>)}
        </Formik>
    </div>)
}