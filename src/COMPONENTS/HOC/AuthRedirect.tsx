import { Navigate } from 'react-router-dom'
import { RootState } from '../../redux/redux-store'
import { connect } from 'react-redux';

// export type AuthRedirectType = ReturnType<typeof AuthRedirect>


const mapStateToPropsForRedirect = (state: RootState) => ({
    isAuth: state.auth.isAuth,
});

export const AuthRedirect = (Component: any) => {

    let RedirectComponent = (props: any) => {
        if (!props.isAuth) return <Navigate to='/login' />
        return <Component {...props} />
    }

    const ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
        RedirectComponent
    );

    return ConnectAuthRedirectComponent
}