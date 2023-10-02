import React, { useEffect } from 'react'
import { RootState } from "../../redux/redux-store";
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { AuthRedirect } from '../HOC/AuthRedirect';
import { compose } from "redux";

type ProfileContainerPropsType = {
    getUserProfile: any
    profile: any
    isAuth?: boolean
}

export const ProfileContainer: React.FC<ProfileContainerPropsType> = ({ getUserProfile, profile, isAuth }) => {

    let { userId } = useParams()
    if (!userId) userId = '2'

    useEffect(() => {
        if (userId) getUserProfile(userId)
    }, [userId])

    return <div className='content'>
        <Profile profile={profile} />
    </div>
}

const mapStateToProps = (state: RootState) => ({
    profile: state.profilePage.profile
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfile }),
    AuthRedirect
)(ProfileContainer)

