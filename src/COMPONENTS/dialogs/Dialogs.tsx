import { S } from './dialogs_style'
import { DialogItem } from "./dialogitem/DialogItem";
import { Message } from "./message/Message";
import { Navigate } from "react-router-dom";
import { FormDialog } from "./FormDialog";


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

    return <S.DialogsWrapper>
        <S.DialogsItem>
            {renderDialogsItem}
        </S.DialogsItem>
        <S.Messages>
            {renderMessageItem}
            <FormDialog onSendMessageClick={onSendMessageClick} />
        </S.Messages>
    </S.DialogsWrapper >
}



