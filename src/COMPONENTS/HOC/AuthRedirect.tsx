import { Navigate } from 'react-router-dom'
import { RootState } from '../../redux/redux-store'
import { connect } from 'react-redux';





export const AuthRedirect = (Component: any) => {

    const RedirectComponent = (props: any) => {
        if (!props.isAuth) {
            return <Navigate to='/login' />
        }
        return <Component {...props} />
    }
    const mapStateToPropsForRedirect = (state: RootState) => ({
        isAuth: state.auth.isAuth
    });
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}