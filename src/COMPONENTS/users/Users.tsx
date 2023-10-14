import React from 'react'
import { User } from './User'
import { Pagination } from '../common/pagination/Pagination'
import { IsDisabletType, UserItemType } from '../../redux/users-reducer'


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
    return <div>
        <Pagination totalUsersCount={totalUsersCount} pageSize={pageSize} onChangePages={onChangePages} />
        {users.map((user: UserItemType, index: number) => <User
            index={index}
            user={user}
            isDisabled={isDisabled}
            unfollow={unfollow}
            follow={follow} />)}
    </div>
}
