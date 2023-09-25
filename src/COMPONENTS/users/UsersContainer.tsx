import React from 'react'
// import { Users } from './Users'
import { connect } from 'react-redux'
import { UserItemType, followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer'
import { UsersClass } from './UsersClass'
import { Dispatch, AnyAction } from 'redux';
import { RootState } from '../../redux/redux-store';
// alalalalal
const mapStateToProps = (state: any) => ({ users: state.usersPage.users })

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: UserItemType[]) => dispatch(setUsersAC(users)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)