import React from 'react'
import { connect } from 'react-redux'
import { DataItemType, setAuthUserData } from '../../redux/auth-reducer'
import { Header } from './Header'
import axios from 'axios'
import { RootState } from '../../redux/redux-store'

export type HeaderContainerPropsType = {
    setAuthUserData: (obj: DataItemType) => void
    isAut: boolean
    login: string
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount(): void {
        try {
            axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true
            }).then(response => {
                if (response.data.resultCode === 0) this.props.setAuthUserData(response.data.data)
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: RootState) => ({
    isAut: state.auth.isAuth,
    login: state.auth.data.login

})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)
