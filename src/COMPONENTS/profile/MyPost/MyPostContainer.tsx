import { Dispatch, AnyAction } from 'redux';
import { addPostActionCreator } from '../../../redux/profile-reducer'
import { RootState } from '../../../redux/redux-store';
import { MyPost } from "./MyPost";
import { connect } from "react-redux";


const mapStateToProps = (state: RootState) => {
    return {
        posts: state.profilePage.post,
    }
}
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        addPost: (post: string) => { dispatch(addPostActionCreator(post)) }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)