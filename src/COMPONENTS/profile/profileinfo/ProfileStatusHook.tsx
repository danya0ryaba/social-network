import React, { ChangeEvent } from 'react'
import { ProfilePropsType } from '../Profile'

type ProfileStatusHookType = Omit<ProfilePropsType, 'profile' | 'isOwner' | 'savePhoto'>

export const ProfileStatusHook: React.FC<ProfileStatusHookType> = ({ status, updateStatus }) => {

    const [editMode, setEditMode] = React.useState(false)
    const [statusState, setStatusState] = React.useState(status)
    React.useEffect(() => {
        setStatusState(status)
    }, [status])
    const activetEditMode = () => setEditMode(true)

    const diactivetEditMode = () => {
        setEditMode(false)
        updateStatus(statusState)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusState(e.currentTarget.value)
    }
    return (<>
        {!editMode ?
            <span>
                <span onDoubleClick={activetEditMode}>
                    {status || 'Нет статуса'}
                </span>
            </span>
            :
            <span>
                <input value={statusState}
                    onChange={onStatusChange}
                    autoFocus onBlur={diactivetEditMode}
                    type="text" />
            </span>
        }
    </ >)
}
