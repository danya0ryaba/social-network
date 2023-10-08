import { Field, Form, Formik } from "formik"
import { validateText } from "../../utils/validateForm"

type FormDialogType = {
    onSendMessageClick: (value: string) => void
}
export const FormDialog: React.FC<FormDialogType> = ({ onSendMessageClick }) => {
    return (<div>
        <Formik initialValues={{ message: '' }} onSubmit={value => onSendMessageClick(value.message)}>
            {({ errors, touched }) => (<Form>
                <div>
                    <div><label htmlFor="message">Введите текст</label></div>
                    <Field component="textarea" name="message" id="message" validate={validateText} />
                </div>
                {errors.message && touched.message && <div>{errors.message}</div>}
                <div>
                    <button type="submit">отправить</button>
                </div>
            </Form>)}
        </Formik>
    </div>)
}