import React from 'react'
import { connect } from 'react-redux'
import { getAuthUserData } from '../../redux/auth-reducer'
import { Header } from './Header'
import { RootState } from '../../redux/redux-store'

export type HeaderContainerPropsType = {
    getAuthUserData: any
    isAut: boolean
    login: string
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount(): void {
        // не понятно нахуя я прокидываю через пропсы,
        //  хотя в ProfileContainer если не прокидываю то хуйня получается
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: RootState) => ({
    isAut: state.auth.isAuth,
    login: state.auth.data.login

})

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer)
