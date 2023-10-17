import { S } from './navbar_style'
import { NavLink, Outlet } from 'react-router-dom'

export const Navbar: React.FC = () => {
    return <S.MainNavbar>
        <S.NavbarA><NavLink to='/'>Profile</NavLink></S.NavbarA>
        <S.NavbarA><NavLink to='dialogs'>Messages</NavLink> </S.NavbarA>
        <S.NavbarA><NavLink to='users'>Users</NavLink></S.NavbarA>
        <S.NavbarA><NavLink to='news'>News</NavLink></S.NavbarA>
        <S.NavbarA><NavLink to='music'>Music</NavLink></S.NavbarA>
        <S.NavbarA><NavLink to='settings'>Settings</NavLink></S.NavbarA>
        <Outlet />
    </S.MainNavbar>
}

