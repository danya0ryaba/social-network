import { connect } from 'react-redux'
import { UserItemType, follow, setCurrentPage, setIsFetching, setTotalCount, setUsers, unfollow } from '../../redux/users-reducer'
import { Dispatch, AnyAction } from 'redux';
import { RootState } from '../../redux/redux-store';
import React from 'react';
import axios from 'axios';
import { Users } from './Users';
import { Preloader } from '../common/preloader/Preloader';

// дял типизиции класса (class UsersClass extends React.Component<{}, {}>) этой строки используются 2 параметра
// 1 это типизация пропсов
// 2 это типизация state

// можно создать type на основе типа, который лежит в редьюсере
interface MyClassUsersProps {
    users: UserItemType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    setUsers: (users: UserItemType[]) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setIsFetching: (value: boolean) => void
}

class UsersContainerClass extends React.Component<MyClassUsersProps, RootState> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
        }).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }

    onChangePages = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true,
        }).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onChangePages={this.onChangePages}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />}

        </>
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
//     return {
//         follow: (userId: number) => dispatch(followAC(userId)),
//         unfollow: (userId: number) => dispatch(unfollowAC(userId)),
//         setUsers: (users: UserItemType[]) => dispatch(setUsersAC(users)),
//         setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
//         setTotalUsersCount: (totalCount: number) => dispatch(setTotalCountAC(totalCount)),
//         setIsFetching: (isFetch: boolean) => dispatch(setIsFetchingtAC(isFetch))
//     }
// }

// если вы передаете в connect вторым аргументом не mapDispatchToProps, а объект с AC,
//  то connect оборачивает ваши AC в функцию-обертку () => store.dispatch(AC) и 
// передаёт в props компонента

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setIsFetching
})(UsersContainerClass)