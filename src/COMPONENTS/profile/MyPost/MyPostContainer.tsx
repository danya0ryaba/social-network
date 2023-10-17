import { MyPost } from "./MyPost";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from 'redux';
import { RootState } from '../../../redux/redux-store';
import { addPostActionCreator } from '../../../redux/profile-reducer'

const mapStateToProps = (state: RootState) => ({ posts: state.profilePage.post })

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        addPost: (post: string) => { dispatch(addPostActionCreator(post)) }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)