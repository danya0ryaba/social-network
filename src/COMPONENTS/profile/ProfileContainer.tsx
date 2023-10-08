import React, { useEffect } from 'react'
import { RootState } from "../../redux/redux-store";
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { AuthRedirect } from '../HOC/AuthRedirect';
import { compose } from "redux";

type ProfileContainerPropsType = {
    getUserProfile: any
    profile: any
    isAuth?: boolean
    getUserStatus: any
    updateStatus: (status: string) => void
    getStatus: (userId: string) => void
    status: string
}

export const ProfileContainer: React.FC<ProfileContainerPropsType> = ({
    getUserProfile,
    profile,
    updateStatus,
    getStatus,
    status
}) => {
    let { userId } = useParams()
    // меня редиректит сюда потому что userId захардкожен (userId = '2')
    if (!userId) userId = '2'
    // 29605
    useEffect(() => {
        if (userId) {
            getUserProfile(userId);
            getStatus(userId)
        }
    }, [userId])
    return <div className='content'>
        <Profile updateStatus={updateStatus} profile={profile} status={status} />
    </div>
}

const mapStateToProps = (state: RootState) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    AuthRedirect
)(ProfileContainer)

