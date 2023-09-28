
import { ProfileInfo } from "./profileinfo/ProfileInfo";
import { MyPostContainer } from "./MyPost/MyPostContainer";

export type ProfilePropsType = {
    profile: any
}

export const Profile: React.FC<ProfilePropsType> = ({ profile }) => {
    return (
        <div className='content'>
            <ProfileInfo profile={profile} />
            <MyPostContainer />
        </div>
    )
}
