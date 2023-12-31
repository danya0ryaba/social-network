import { UserItemType } from "../redux/users-reducer"


export const followOrUnfollow = (items: UserItemType[] | [], itemId: number, objPropName: string, newObjProps: { followed: boolean }) => {
    return items.map((u: any) => u[objPropName] === itemId ?
        { ...u, ...newObjProps } : u)
}