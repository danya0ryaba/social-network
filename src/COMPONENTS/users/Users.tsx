import React from 'react'
import { User } from './User'
import { MyClassUsersProps } from './UsersContainer'
import { UserItemType } from '../../redux/users-reducer'
import { Pagination } from '../common/pagination/Pagination'

type UsersPropsType = Omit<MyClassUsersProps, 'isFetching' | 'setIsFetching' |
    'setDisabledFollow' | 'getUsersThunkCreator'> & { onChangePages: (pageNumber: number) => void }

export const Users: React.FC<UsersPropsType> = ({
    users,
    pageSize,
    isDisabled,
    currentPage,
    onChangePages,
    totalUsersCount,
    followThunkCreator,
    unfollowThunkCreator,
}) => {
    return <div>
        <Pagination currentPage={currentPage} portionSize={10}
            totalUsersCount={totalUsersCount} pageSize={pageSize} onChangePages={onChangePages} />
        {users.map((user: UserItemType) => <User
            user={user}
            key={user.id}
            isDisabled={isDisabled}
            unfollow={unfollowThunkCreator}
            follow={followThunkCreator} />)}
    </div>
}
