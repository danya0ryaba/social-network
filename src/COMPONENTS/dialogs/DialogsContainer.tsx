import React from "react";

import { sendMessageCreator, updateNewMeessageBodyCreator } from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";


const mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessage: (body: string) => { dispatch(updateNewMeessageBodyCreator(body)) },
        sendMessageClick: () => { dispatch(sendMessageCreator()) }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)