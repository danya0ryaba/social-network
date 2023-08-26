import React from 'react'
import { Users } from './Users'
import { connect } from 'react-redux'
import { UserItemType, followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer'


const mapStateToProps = (state: any) => ({ users: state.usersPage.users })

const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: UserItemType[]) => dispatch(setUsersAC(users)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)