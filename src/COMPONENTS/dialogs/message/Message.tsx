import React from "react";
import { S } from './../dialogs_style'

type MessageType = {
    message: string
    id?: number
}
export const Message = (props: MessageType) => {
    return <S.Message>{props.message}</S.Message>
}