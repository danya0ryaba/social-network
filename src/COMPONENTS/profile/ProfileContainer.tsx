import React, { useEffect } from 'react'
import { RootState } from "../../redux/redux-store";
import { Profile } from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserProfile, setUserProfile } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { usersAPI } from '../../DAL/api';


type ProfileContainerPropsType = {
    getUserProfile: any
    profile: any
}


export const ProfileContainer: React.FC<ProfileContainerPropsType> = (props) => {


    let { userId } = useParams()
    if (!userId) userId = '2'

    useEffect(() => {
        if (userId) props.getUserProfile(userId)

    }, [userId])

    return <div className='content'>
        <Profile profile={props.profile} />
    </div>
}

const mapStateToProps = (state: RootState) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, { getUserProfile })(ProfileContainer)

