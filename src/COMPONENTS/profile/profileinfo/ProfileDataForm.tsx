import { Field, Form, Formik } from "formik"

type ProfileDataForm = {
    profile: any
    onSave: any
    setEditMode: (value: boolean) => void
}

export const ProfileDataForm: React.FC<ProfileDataForm> = ({ profile, onSave, setEditMode }) => {

    return <div> <Formik initialValues={{
        fullName: profile.fullName,
        aboutMe: profile.aboutMe,
        lookingForAJob: profile.lookingForAJob,
        lookingForAJobDescription: profile.lookingForAJobDescription,
        contacts: {
            facebook: profile.contacts.facebook || '',
            website: profile.contacts.website || '',
            vk: profile.contacts.vk || '',
            twitter: profile.contacts.twitter || '',
            instagram: profile.contacts.instagram || '',
            youtube: profile.contacts.youtube || '',
            github: profile.contacts.github || '',
            mainLink: profile.contacts.mainLink || ''
        },


    }}
        onSubmit={obj => {
            onSave(obj)
            setEditMode(false)
        }}>

        {({ errors, touched, handleReset }) => (<Form>
            <div>
                <div><label htmlFor="fullName">Name</label></div>
                <Field id="fullName" name='fullName' type="text" placeholder='Full name' />
            </div>

            <div>
                <div><label htmlFor="aboutMe">About me</label></div>
                <Field id="aboutMe" name='aboutMe' component='textarea'
                    placeholder='about me' />
            </div>

            <div>
                <div><label htmlFor="lookingForAJobDescription">Looking for a job description</label></div>
                <Field id="lookingForAJobDescription" name='lookingForAJobDescription' component='textarea'
                    placeholder='Looking for a job description' />
            </div>

            <div>
                <div>
                    <label htmlFor="lookingForAJob">Looking for a job : </label>
                    {profile.lookingForAJob ? "yes" : "no"}
                </div>
                <Field id="lookingForAJob" name='lookingForAJob' type="checkbox" />
            </div>

            <ul>
                {Object.keys(profile.contacts).map((el: string) => {
                    return <div key={el}>

                        <div><label htmlFor={el}>{el} : </label></div>
                        {/* надо передавать валидный url иначе не отобразится. Добавить обработку форму и заблокировать отправку если невалидный url  */}
                        <Field id={el} name={`contacts.${el}`} type="text" />
                    </div>
                })}
            </ul>

            <button type="submit">save</button>
        </Form>)}
    </Formik >
    </div>
}


