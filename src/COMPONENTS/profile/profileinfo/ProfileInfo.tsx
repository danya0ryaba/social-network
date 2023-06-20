import React from "react";
import { S } from './profileinfo_style'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <S.ProfileImg src="https://teletype.in/files/c7/21/c7213c6e-3181-41dc-a0e4-01136b098f79.jpeg" alt="" />
            </div>
            <S.AvaDescription>ava+description</S.AvaDescription>
        </div>
    )
}