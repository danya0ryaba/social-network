import { Field, Form, Formik } from 'formik'



export const Login: React.FC<{}> = () => {
    return <div>
        <LoginFormWithFormik />
    </div>
}


// example formik
export const LoginFormWithFormik = () => {
    return <div>
        <h1>Login</h1>

        <Formik initialValues={{ login: '', password: '', checkbox: false }}
            onSubmit={value => console.log(value)}>

            {({ errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, }) => (<Form>
                <div>
                    <label htmlFor="login">login</label>
                    <Field id="login" name='login' type="text" placeholder='login' />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <Field id="password" name='password' type="password" placeholder='password' />
                </div>
                <div>
                    <label htmlFor="remember">remember me</label>
                    <Field id="remember" name='checkbox' type="checkbox" />
                </div>
                <button type='submit'>SUBMIT</button>
            </Form>)}
        </Formik>
    </div>
}