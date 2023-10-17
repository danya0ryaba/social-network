import { S } from './dialogs_style'
import { FormDialog } from "./FormDialog";
import { Message } from "./message/Message";
import { Navigate } from "react-router-dom";
import { DialogItem } from "./dialogitem/DialogItem";
import { DialogsPageType } from '../../redux/dialogs-reducer';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
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

export const Dialogs: React.FC<DialogsPropsType> = ({ dialogsPage, isAuth, sendMessageClick }) => {

    if (!isAuth) return <Navigate to='/login' />

    const renderDialogsItem = dialogsPage.dialogs
        .map((elem: DialogsItemType) => <DialogItem key={elem.id_to} name={elem.name} id_to={elem.id_to} />)

    const renderMessageItem = dialogsPage.messages
        .map((elem: MessagesItemType) => <Message key={elem.id} message={elem.message} />)

    const onSendMessageClick = (value: string) => sendMessageClick(value)

    return <S.DialogsWrapper>
        <S.DialogsItem>{renderDialogsItem}</S.DialogsItem>
        <S.Messages>
            {renderMessageItem}
            <FormDialog onSendMessageClick={onSendMessageClick} />
        </S.Messages>
    </S.DialogsWrapper >
}



