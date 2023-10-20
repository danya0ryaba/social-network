import { ProfileInfo } from "./profileinfo/ProfileInfo";
import { MyPostContainer } from "./MyPost/MyPostContainer";

export type ProfilePropsType = {
    onSave: any
    savePhoto: any
    isOwner: boolean
    profile: any
    status: string
    updateStatus: (status: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    // console.log(props.onSave);

    return (
        <div className='content'>
            <ProfileInfo {...props} />
            <MyPostContainer />
        </div>
    )
}
