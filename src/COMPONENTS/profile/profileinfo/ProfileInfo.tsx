import React, { ChangeEvent } from "react";
import { S } from './profileinfo_style'
import { ProfilePropsType } from "../Profile";
import { ProfileStatusHook } from "./ProfileStatusHook";
import { Preloader } from "../../common/preloader/Preloader";
import userPhoto from '../../../assets/users/984126_avatar_male_man_user_person_icon.png'
import { ProfileApiSuccssesItem } from "../../../redux/profile-reducer";

export const ProfileInfo: React.FC<ProfilePropsType> = ({ profile, updateStatus, status, isOwner, savePhoto }) => {

    if (!profile) return <Preloader />

    const propertyContacts = Object.keys(profile.contacts)

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <>
            <div>
                <S.ProfileImg src="https://teletype.in/files/c7/21/c7213c6e-3181-41dc-a0e4-01136b098f79.jpeg" alt="fullimage" />
            </div>
            <S.AvaDescription>
                <img src={profile.photos.large || userPhoto} alt="large image" />
            </S.AvaDescription>




            {isOwner && <input type="file" onChange={onMainPhotoSelected} />}

            <div>Name : {profile.fullName}</div>
            <div>{profile.aboutMe}</div>
            <div><b>Looking for a job</b>: {profile.lookingForAJob ? "no" : "yes"}</div>
            {!profile.lookingForAJob &&
                <div><b>My professional skills </b>:{profile.lookingForAJobDescription}</div>}
            <div><b>About me</b>: {profile.aboutMe}</div>
            <ul>
                {propertyContacts.map(el => {
                    return <Conatact key={el} contactProperty={el} contactValue={profile.contacts[el]} />
                })}
            </ul>



            <span>Status : <ProfileStatusHook status={status} updateStatus={updateStatus} /></span>
        </>
    )
}

type ContactPropsType = {
    contactProperty: string
    contactValue: string
}
export const Conatact: React.FC<ContactPropsType> = ({ contactProperty, contactValue }) => {
    return <div>
        <span>{contactProperty} :  <b>{contactValue}</b></span>
    </div>
}
