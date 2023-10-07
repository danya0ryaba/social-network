import { S } from './mypost_style'
import { Post } from "./Post/Post";
import { PostItemType } from "../../../redux/profile-reducer";
import { Field, Formik, Form } from "formik";


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
                <MyPostForm onAddPostHandler={onAddPostHandler} />
            </div>
            <div>
                {renderPostData}
            </div>
        </S.MyPostWrapper >
    )
}

type MyPostFormType = {
    onAddPostHandler: (value: string) => void
}
const MyPostForm: React.FC<MyPostFormType> = ({ onAddPostHandler }) => {
    return <>
        <Formik initialValues={{ mypost: '' }}
            onSubmit={value => onAddPostHandler(value.mypost)}>
            {({ errors, touched }) => (<Form>
                <label htmlFor="post">my post</label>
                <Field component="textarea" id="post" name="mypost" />
                <div>
                    <button type="submit">опубликовать</button>
                </div>
            </Form>)}

        </Formik>
    </>
}