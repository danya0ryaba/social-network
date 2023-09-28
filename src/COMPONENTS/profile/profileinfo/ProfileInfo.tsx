import React from "react";
import { S } from './profileinfo_style'
import { ProfilePropsType } from "../Profile";
import { Preloader } from "../../common/preloader/Preloader";


export const ProfileInfo: React.FC<ProfilePropsType> = ({ profile }) => {

    if (!profile) return <Preloader />

    const propertyContacts = Object.keys(profile.contacts)
    return (
        <div>
            <div>
                <S.ProfileImg src="https://teletype.in/files/c7/21/c7213c6e-3181-41dc-a0e4-01136b098f79.jpeg" alt="" />
            </div>
            <div>{profile.fullName}</div>
            <S.AvaDescription>
                <img src={profile.photos.large} alt="" />
            </S.AvaDescription>
            <div>{profile.aboutMe}</div>
            <ul>
                {propertyContacts.map((el: string, index) => {
                    return <li key={index}>{el} - <span>{profile.contacts[el]}</span></li>
                })}
            </ul>

        </div>
    )
}