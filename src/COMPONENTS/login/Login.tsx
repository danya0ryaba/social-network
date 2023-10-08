import React from 'react'
import { Field, Form, Formik } from 'formik'
import { validateEmail, validatePassword } from '../../utils/validateForm'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Navigate } from 'react-router-dom'
import { RootState } from '../../redux/redux-store'

type LoginType = {
    isAuth: boolean
}

const Login: React.FC<LoginType> = (props) => {
    if (props.isAuth) return <Navigate to='/profile' />
    return <div><LoginFormWithFormik {...props} /></div>
}

export const LoginFormWithFormik = (props: any) => {
    return <div>
        <h1>Login</h1>
        <Formik initialValues={{ email: '', password: '', remember: false }}
            onSubmit={value => props.login(value.email, value.password, value.remember)}>
            {({ errors, touched }) => (
                <Form>
                    <div>
                        <label htmlFor="email">email</label>
                        <Field id="email" name='email' type="text" placeholder='email' validate={validateEmail} />
                        {errors.email && touched.email && <div>{errors.email}</div>}
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <Field id="password" name='password' type="password"
                            placeholder='password' validate={validatePassword} />
                        {errors.password && touched.password && <div>{errors.password}</div>}
                    </div>
                    <div>
                        <label htmlFor="remember">remember me</label>
                        <Field id="remember" name='remember' type="checkbox" />
                    </div>
                    <button type='submit'>SUBMIT</button>
                </Form>)}
        </Formik >
    </div >
}

const mapStateToProps = (state: RootState) => ({ isAuth: state.auth.isAuth })
export default connect(mapStateToProps, { login })(Login)