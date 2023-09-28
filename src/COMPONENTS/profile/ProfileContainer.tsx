import React, { useEffect } from 'react'
import { RootState } from "../../redux/redux-store";
import { ProfileInfo } from './profileinfo/ProfileInfo';
import { MyPostContainer } from './MyPost/MyPostContainer';
import { Profile } from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';


type ProfileContainerPropsType = {
    setUserProfile: (value: any) => void
    profile: any
}


export const ProfileContainer: React.FC<ProfileContainerPropsType> = (props) => {
    let { userId } = useParams()
    if (!userId) userId = '2'

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            props.setUserProfile(response.data)
        }).catch((er) => {
            console.log('catch' + er);
        })
    }, [userId])

    return <div className='content'>
        <Profile profile={props.profile} />
    </div>
}

const mapStateToProps = (state: RootState) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)



// НАДО ТИПИЗИРОВАТЬ И ТУТ И В РЕДЬЮСЕРЕ================



// ПЕРЕПИСАЛ КЛАСС НА ФУНКЦИОНАЛЬНУЮ КОМПОНЕНТУ

// ============================= КЛАСС ============================= //
// class ProfileContainer extends React.Component<ProfileContainerPropsType, RootState>{
//     componentDidMount(): void {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
//             this.props.setUserProfile(response.data)
//         }).catch((er) => {
//             console.log('catch' + er);
//         })
//     }
//     render() {
//         return <div className='content'>
//             <Profile {...this.props} profile={this.props.profile} />
//         </div>
//     }
// }


// ============================= ПЕРЕПИСАЛ НА ProfileContainer ============================= //