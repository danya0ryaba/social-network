import React from "react";
import { S } from './header_style'
import { NavLink } from "react-router-dom";
import { HeaderContainerPropsType } from "./HeaderContainer";



export const Header: React.FC<HeaderContainerPropsType> = (props) => {
    return <>
        <S.Header>
            <img src="https://www.designevo.com/res/templates/thumb_small/brown-circle-and-chocolate-coffee.webp?v=1.0.0.2" alt="" />

            {props.isAut ? props.login
                : <NavLink to={"/"}>
                    <S.MyDiv>LOGIN</S.MyDiv>
                </NavLink>}

        </S.Header>
    </>
}