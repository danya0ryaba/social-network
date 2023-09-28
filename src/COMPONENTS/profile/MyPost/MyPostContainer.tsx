import { Dispatch, AnyAction } from 'redux';
import { addNewPostActionCreator, addPostActionCreator } from '../../../redux/profile-reducer'
import { RootState } from '../../../redux/redux-store';
import { MyPost } from "./MyPost";
import { connect } from "react-redux";


const mapStateToProps = (state: RootState) => {
    return {
        posts: state.profilePage.post,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        updateNewPostText: (text: string) => dispatch(addNewPostActionCreator(text)),
        addPost: () => { dispatch(addPostActionCreator()) }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)