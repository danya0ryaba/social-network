import { ProfileInfo } from "./profileinfo/ProfileInfo";
import { MyPostContainer } from "./MyPost/MyPostContainer";
import { ProfileApiSuccssesItem } from "../../redux/profile-reducer";

export type ProfilePropsType = {
    savePhoto: any
    // profile: null | ProfileApiSuccssesItem
    isOwner: boolean
    profile: any
    status: string
    updateStatus: (status: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div className='content'>
            <ProfileInfo {...props} />
            <MyPostContainer />
        </div>
    )
}
