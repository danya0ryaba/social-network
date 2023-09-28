import styled from "styled-components";

const Header = styled.div`
    grid-area: h;
    background-color: rgb(159, 211, 80);
    img{
        width: 40px;
    }
`
const MyDiv = styled.div`
    float:right;
    color:white;
    padding: 20px;
    font-weight: 900;
    font-size: 25px;
    cursor: pointer;
    &:hover{
        color: #83007d;
    }
`

export const S = {
    Header,
    MyDiv
}