import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { AuthRedirect } from '../HOC/AuthRedirect';
import { RootState } from '../../redux/redux-store';
import { Dispatch, AnyAction, compose } from 'redux';
import { sendMessageCreator } from "../../redux/dialogs-reducer";

const mapStateToProps = (state: RootState) => ({ dialogsPage: state.dialogsPage })

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    sendMessageClick: (value: string) => { dispatch(sendMessageCreator(value)) }
})


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirect
)(Dialogs)