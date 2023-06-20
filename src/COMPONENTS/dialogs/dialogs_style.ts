import styled from "styled-components";

const DialogsWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 10fr;
`
const DialogsItem = styled.div`
    padding: 20px;
`
type DialogType = {
    active: boolean
}
const Dialog = styled.div`
a{
    color:white;
}
    padding: 20px 0;
`

const Messages = styled.div`
    padding: 20px;
    font-size: 30px;
`
const Message = styled.div`
    
`
const AvatarDialog = styled.div`
    display: inline-block;
    img{
        width: 40px;
        height: 40px;
        border-radius: 100%;
        border: 1px solid white;
    }
`
export const S = {
    DialogsWrapper,
    DialogsItem,
    Dialog,
    Messages,
    Message,
    AvatarDialog
}