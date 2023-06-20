import styled from "styled-components";

const NavbarA = styled.div`
    a{
        font-size: 30px;
        font-family: 'Arial', sans-serif;
        color: white;
    }
    a.active{color: gold;}
    padding: 10px 0;
`
const MainNavbar = styled.nav`
    padding: 20px;
    grid-area: n;
    background-color: rgb(118, 63, 194);
`
export const S = {
    NavbarA,
    MainNavbar
}