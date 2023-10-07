
import { ProfileInfo } from "./profileinfo/ProfileInfo";
import { MyPostContainer } from "./MyPost/MyPostContainer";

export type ProfilePropsType = {
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
