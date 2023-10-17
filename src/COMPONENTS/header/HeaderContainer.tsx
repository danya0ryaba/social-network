import React from 'react'
import { Header } from './Header'
import { connect } from 'react-redux'
import { getAuthUserData, logout } from '../../redux/auth-reducer'

import { RootState } from '../../redux/redux-store'

export type HeaderContainerPropsType = {
    getAuthUserData: () => void
    logout: () => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login

})

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer)
