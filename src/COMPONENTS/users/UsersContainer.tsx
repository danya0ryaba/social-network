import { connect } from 'react-redux'
import { IsDisabletType, UserItemType, followThunkCreator, getUsersThunkCreator, setDisabledFollow, setIsFetching, unfollowThunkCreator } from '../../redux/users-reducer'
import { RootState } from '../../redux/redux-store';
import React from 'react';
import { Users } from './Users';
import { Preloader } from '../common/preloader/Preloader';
import { AuthRedirect } from '../HOC/AuthRedirect';
import { compose } from "redux";
import { getCurrentPage, getIsDisabled, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/selectors/users-selectors';

// дял типизиции класса (class UsersClass extends React.Component<{}, {}>) этой строки используются 2 параметра
// 1 это типизация пропсов
// 2 это типизация state

// можно создать type на основе типа, который лежит в редьюсере
export interface MyClassUsersProps {
    users: UserItemType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isDisabled: IsDisabletType
    setIsFetching: (value: boolean) => void
    setDisabledFollow: (isFetching: boolean, id: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    unfollowThunkCreator: (userId: number) => void
    followThunkCreator: (userId: number) => void
}

class UsersContainerClass extends React.Component<MyClassUsersProps, RootState> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onChangePages = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                isDisabled={this.props.isDisabled}
                onChangePages={this.onChangePages}
                followThunkCreator={this.props.followThunkCreator}
                unfollowThunkCreator={this.props.unfollowThunkCreator}
            />}
        </>
    }
}

const mapStateToProps = (state: RootState) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isDisabled: getIsDisabled(state)
})

// если вы передаете в connect вторым аргументом не mapDispatchToProps, а объект с AC,
//  то connect оборачивает ваши AC в функцию-обертку () => store.dispatch(AC) и 
// передаёт в props компонента

export default compose(
    connect(mapStateToProps, {
        unfollowThunkCreator,
        followThunkCreator,
        setIsFetching,
        setDisabledFollow,
        getUsersThunkCreator
    }),
    AuthRedirect
)(UsersContainerClass)