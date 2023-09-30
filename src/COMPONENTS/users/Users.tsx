import React from 'react'
import { S } from './users_style'
import { IsDisabletType, UserItemType } from '../../redux/users-reducer'
import userPhoto from '../../assets/users/984126_avatar_male_man_user_person_icon.png'
import { NavLink } from 'react-router-dom'


type UsersPropsType = {
    users: UserItemType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isDisabled: IsDisabletType
    onChangePages: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users: React.FC<UsersPropsType> = ({
    totalUsersCount,
    pageSize,
    currentPage,
    users,
    isDisabled,
    onChangePages,
    follow,
    unfollow,
}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pagesArray = []

    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }
    // не работает хз почему
    // в место перебора pagesArray должен быть  slicedPages

    const curPF = ((currentPage - 5) < 0) ? 0 : currentPage - 5;
    const slicedPages = pagesArray.slice(curPF, currentPage + 5);

    return <div>
        <div>
            {pagesArray.map<JSX.Element>((el: number, index) => {
                return <S.MySpan onClick={(e) => onChangePages(el)} key={index}>{el}</S.MySpan>
            })}
        </div>
        {users.map((user: UserItemType, index: number) => <div key={index}>
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
        </div >)}
    </div >
}
