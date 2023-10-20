import React, { ChangeEvent } from "react";
import { S } from './profileinfo_style'
import { ProfilePropsType } from "../Profile";
import { ProfileStatusHook } from "./ProfileStatusHook";
import { Preloader } from "../../common/preloader/Preloader";
import userPhoto from '../../../assets/users/984126_avatar_male_man_user_person_icon.png'
import { ProfileDataForm } from "./ProfileDataForm";
import { ProfileData } from "./ProfileData";

export const ProfileInfo: React.FC<ProfilePropsType> = ({ profile, updateStatus, status, isOwner, savePhoto, onSave }) => {

    const [editMode, setEditMode] = React.useState(false)

    if (!profile) return <Preloader />

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) savePhoto(e.target.files[0])
    }

    return (<>
        <div>
            <S.ProfileImg src="https://teletype.in/files/c7/21/c7213c6e-3181-41dc-a0e4-01136b098f79.jpeg" alt="fullimage" />
        </div>
        <S.AvaDescription>
            <img src={profile.photos.large || userPhoto} alt="large image" />
        </S.AvaDescription>
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}

        {editMode ? <ProfileDataForm
            setEditMode={setEditMode}
            profile={profile}
            onSave={onSave} /> :
            <ProfileData
                profile={profile}
                isOwner={isOwner}
                goToEditMode={() => setEditMode(true)} />}

        <span>Status : <ProfileStatusHook status={status} updateStatus={updateStatus} /></span>
    </>)
}





