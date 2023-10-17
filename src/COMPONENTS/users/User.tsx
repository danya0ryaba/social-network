import React from 'react'
import { S } from './users_style'
import { NavLink } from 'react-router-dom'
import { IsDisabletType, UserItemType } from '../../redux/users-reducer'
import userPhoto from '../../assets/users/984126_avatar_male_man_user_person_icon.png'

type UserPropsType = {
    user: UserItemType
    isDisabled: IsDisabletType
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

export const User: React.FC<UserPropsType> = ({ user, isDisabled, unfollow, follow }) => {

    return <div key={user.id}>
        <span>
            <div>
                <NavLink to={`/profile/${user.id}`}>
                    <S.ImageAvatar src={user.photos.small !== null ? user.photos.small : userPhoto} alt="avatar" />
                </NavLink>
            </div>
            <div>
                {user.followed ?
                    <button disabled={isDisabled.some(id => id === user.id)}
                        onClick={() => { unfollow(user.id) }}>Unfollow</button>

                    : <button disabled={isDisabled.some(id => id === user.id)}
                        onClick={() => { follow(user.id) }}>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>'user.location.country'</div>
                <div>user.location.city</div>
            </span>
        </span>
    </div >
}
