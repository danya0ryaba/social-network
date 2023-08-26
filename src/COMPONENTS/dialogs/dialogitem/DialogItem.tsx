import React from "react";
import { S } from './../dialogs_style'
import { NavLink } from "react-router-dom";
// import { DialogsItemType } from "../../../redux/store";

type DialogsItemTypeProps = {
    name: string
    id_to: number
}
export const DialogItem = (props: DialogsItemTypeProps) => {
    return (
        <S.Dialog>
            <NavLink to={`/dialogs/${props.id_to}`}>
                <S.AvatarDialog>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Martin_Luther_King_Jr_NYWTS.jpg/250px-Martin_Luther_King_Jr_NYWTS.jpg" alt="" />
                    {props.name}
                </S.AvatarDialog>
            </NavLink>
        </S.Dialog>)
}