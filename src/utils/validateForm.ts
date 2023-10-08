

export const validateEmail = (email: string) => {
    if (!email) return 'Required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        return 'Invalid email address';
    }
}
export const validateText = (value: string) => {
    if (!value) return 'Requred'
}


// export const validateUsername = (value: string) => {
//     if (!value) return 'Required!';
//     else if (value.length < 6) return 'Incomplete username'
// }

export const validatePassword = (value: string) => {
    if (!value) return 'Required'
    else if (value.length < 6) return 'Small password'
}