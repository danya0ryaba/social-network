import { Conatact } from "./Contact"

// @ts-ignore
export const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}

        <div>Name : {profile.fullName}</div>

        <div><b>Looking for a job</b>: {profile.lookingForAJob ? "no" : "yes"}</div>

        {!profile.lookingForAJob && <div><b>My professional skills </b>:{profile.lookingForAJobDescription}</div>}

        <div><b>About me</b>: {profile.aboutMe}</div>

        <ul>
            {Object.keys(profile.contacts).map((el: string) => {
                return <Conatact key={el} contactProperty={el} contactValue={profile.contacts[el]} />
            })}
        </ul>
    </div>
}