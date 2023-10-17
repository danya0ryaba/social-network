import React from 'react'
import { Field, Form, Formik } from 'formik'
import { validateEmail, validatePassword } from '../../utils/validateForm'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Navigate } from 'react-router-dom'
import { RootState } from '../../redux/redux-store'

type LoginPropsType = {
    isAuth: boolean
    messageError: string[]
    login: (email: string, password: string, rememberMe: boolean) => void
}

const Login: React.FC<LoginPropsType> = (props) => {
    if (props.isAuth) return <Navigate to='/profile' />
    return <div><LoginFormWithFormik {...props} /></div>
}

export const LoginFormWithFormik = (props: LoginPropsType) => {
    return <div>
        <h1>Login</h1>

        <Formik initialValues={{ email: '', password: '', remember: false }}
            onSubmit={value => props.login(value.email, value.password, value.remember)}>
            {({ errors, touched, handleReset }) => (
                <Form>
                    <div>
                        <label htmlFor="email">email</label>
                        <Field id="email" name='email' type="text" placeholder='email' validate={validateEmail} />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <Field id="password" name='password' type="password"
                            placeholder='password' validate={validatePassword} />
                    </div>
                    <div>
                        <label htmlFor="remember">remember me</label>
                        <Field id="remember" name='remember' type="checkbox" />
                    </div>
                    {props.messageError.length > 0 ? <div>{props.messageError[0]}</div> : false}
                    <button type='submit'>SUBMIT</button>
                </Form>)}
        </Formik >
    </div >
}

const mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    messageError: state.auth.messages
})

export default connect(mapStateToProps, { login })(Login)