import { Dispatch, AnyAction } from 'redux';
import { sendMessageCreator, updateNewMeessageBodyCreator } from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { RootState } from '../../redux/redux-store';

const mapStateToProps = (state: RootState) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        updateNewMessage: (body: string) => { dispatch(updateNewMeessageBodyCreator(body)) },
        sendMessageClick: () => { dispatch(sendMessageCreator()) }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)