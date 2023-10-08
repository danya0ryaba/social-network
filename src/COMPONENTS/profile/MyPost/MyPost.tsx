import { S } from './mypost_style'
import { Post } from "./Post/Post";
import { PostItemType } from "../../../redux/profile-reducer";
import { MyPostForm } from './MyPostForm';


type PropsType = {
    addPost: (post: string) => void
    posts: Array<PostItemType>
}

export const MyPost = (props: PropsType) => {

    const renderPostData = props.posts.map(elem => <Post key={elem.id}
        message={elem.message} like={elem.like} />)

    const onAddPostHandler = (value: string) => props.addPost(value)

    return (
        <S.MyPostWrapper>
            <h3>My Post</h3>
            <div>
                <MyPostForm addPost={onAddPostHandler} />
            </div>
            <div>
                {renderPostData}
            </div>
        </S.MyPostWrapper >
    )
}