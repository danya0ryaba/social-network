import React from 'react'
import { Field, Form, Formik } from 'formik'
import { validateEmail, validatePassword } from '../../utils/validateForm'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Navigate } from 'react-router-dom'
import { RootState } from '../../redux/redux-store'


const Login: React.FC<{ isAuth: boolean }> = (props) => {
    if (props.isAuth) return <Navigate to='/profile' />
    return <div><LoginFormWithFormik {...props} /></div>
}

export const LoginFormWithFormik = (props: any) => {
    return <div>
        <h1>Login</h1>

        <Formik initialValues={{ email: '', password: '', remember: false }}
            onSubmit={value => props.login(value.email, value.password, value.remember)}>
            {({ errors, touched, handleReset }) => (

                <Form>
                    {/* <CreateField id={'email'} name={'email'} placeholder={'email'} type={'text'} validate={validateEmail} />
                    <CreateField id={'password'} name={'password'} placeholder={'password'} type={'password'} validate={validatePassword} />
                    <CreateField id={'remember'} name={'remember'} type={'checkbox'} /> */}
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

// Я НЕ БУДУ ДЕЛАТЬ ФИЛДЫ ОТДЕЛЬНОЙ КОМПОНЕНТОЙ ТК НАДО БУДЕТ ТОГДА КАК-ТО ОБРАБОТКУ ОШИБОК ПИСАТЬ
// type CreateFieldPropsType = {
//     id: string
//     name: string
//     type: string
//     placeholder?: string
//     validate?: (email: string) => string | undefined
// }
// const CreateField: React.FC<CreateFieldPropsType> = ({ id, name, type, placeholder, validate }) => {
//     return <div>
//         <label htmlFor={id}>{name}</label>
//         <Field id={id} name={name} type={type} placeholder={placeholder} validate={validate} />
//     </div>
// }