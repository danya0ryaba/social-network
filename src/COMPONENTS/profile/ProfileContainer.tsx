import { compose } from "redux";
import { Profile } from './Profile';
import { connect } from 'react-redux';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { RootState } from "../../redux/redux-store";
import { AuthRedirect } from '../HOC/AuthRedirect';
import { getStatus, getUserProfile, saveChangedProfile, savePhoto, updateStatus } from '../../redux/profile-reducer';


type ProfileContainerPropsType = {
    getUserProfile: (userId: string) => void
    savePhoto: any
    profile: any
    isAuth?: boolean
    getUserStatus: any
    updateStatus: (status: string) => void
    saveChangedProfile: any
    getStatus: (userId: string) => void
    status: string,
    isAuthIdUser: string
}

export const ProfileContainer: React.FC<ProfileContainerPropsType> = ({
    getUserProfile, profile, updateStatus, getStatus, status, isAuthIdUser, saveChangedProfile
}) => {
    let { userId } = useParams()

    if (!userId) userId = isAuthIdUser

    useEffect(() => {
        if (userId) {
            getUserProfile(userId);
            getStatus(userId)
        }
    }, [userId])

    return <div className='content'>
        <Profile savePhoto={savePhoto}
            onSave={saveChangedProfile}
            isOwner={!!userId}
            updateStatus={updateStatus}
            profile={profile}
            status={status} />
    </div>
}

const mapStateToProps = (state: RootState) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuthIdUser: state.auth.data.id
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveChangedProfile }),
    AuthRedirect
)(ProfileContainer)

