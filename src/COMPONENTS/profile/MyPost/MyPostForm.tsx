import { Field, Form, Formik } from "formik"
import { validateText } from "../../../utils/validateForm"

type MyPostFormType = {
    addPost: (value: string) => void
}

export const MyPostForm: React.FC<MyPostFormType> = ({ addPost }) => {
    return <div>
        <Formik initialValues={{ mypost: '' }}
            onSubmit={value => addPost(value.mypost)}>
            {({ errors, touched }) => (<Form>
                <div>
                    <div><label htmlFor="post">my post</label></div>
                    <Field component="textarea" id="post" name="mypost" validate={validateText} />
                </div>
                {errors.mypost && touched.mypost && <div>{errors.mypost}</div>}
                <div>
                    <button type="submit">опубликовать</button>
                </div>
            </Form>)}

        </Formik>
    </div>
}