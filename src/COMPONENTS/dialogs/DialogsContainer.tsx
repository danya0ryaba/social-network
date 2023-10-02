import { Dispatch, AnyAction } from 'redux';
import { sendMessageCreator, updateNewMeessageBodyCreator } from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { compose } from "redux";
import { RootState } from '../../redux/redux-store';
import { AuthRedirect } from '../HOC/AuthRedirect';

const mapStateToProps = (state: RootState) => ({ dialogsPage: state.dialogsPage })

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        updateNewMessage: (body: string) => { dispatch(updateNewMeessageBodyCreator(body)) },
        sendMessageClick: () => { dispatch(sendMessageCreator()) }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirect
)(Dialogs)