import { S } from './mypost_style'
import { Post } from "./Post/Post";
import { PostItemType } from "../../../redux/profile-reducer";
import { MyPostForm } from './MyPostForm';
import React from 'react';


type PropsType = {
    addPost: (post: string) => void
    posts: Array<PostItemType>
}

export const MyPost = React.memo((props: PropsType) => {

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
})

// export class MyPost extends React.PureComponent<PropsType> {

//     // shouldComponentUpdate(nextProps: Readonly<PropsType>, nextState: Readonly<{}>, nextContext: any): boolean {
//     //     return nextProps !== this.props || nextState !== this.state
//     // }

//     render(): React.ReactNode {

//         const renderPostData = this.props.posts.map(elem => <Post key={elem.id}
//             message={elem.message} like={elem.like} />)

//         const onAddPostHandler = (value: string) => this.props.addPost(value)

//         return (
//             <S.MyPostWrapper>
//                 <h3>My Post</h3>
//                 <div>
//                     <MyPostForm addPost={onAddPostHandler} />
//                 </div>
//                 <div>
//                     {renderPostData}
//                 </div>
//             </S.MyPostWrapper >
//         )
//     }

// }