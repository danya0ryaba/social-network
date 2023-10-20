
type ContactPropsType = {
    contactProperty: string
    contactValue: string
}
export const Conatact: React.FC<ContactPropsType> = ({ contactProperty, contactValue }) => {
    return <div>
        <span>{contactProperty} :  <b>{contactValue}</b></span>
    </div>
}