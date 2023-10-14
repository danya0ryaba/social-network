import React, { ChangeEvent } from 'react'


type ProfileStatusHookType = {
    status: any
    updateStatus: any
}

export const ProfileStatusHook: React.FC<ProfileStatusHookType> = ({ status, updateStatus }) => {

    const [editMode, setEditMode] = React.useState(false)
    const [statusState, setStatusState] = React.useState(status)
    React.useEffect(() => {
        setStatusState(status)
    }, [status])
    const activetEditMode = () => {
        setEditMode(true)
    }
    const diactivetEditMode = () => {
        setEditMode(false)
        updateStatus(statusState)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusState(e.currentTarget.value)
    }
    return (<div>
        {!editMode ?
            <div>
                <span onDoubleClick={activetEditMode}>
                    {status || 'Нет статуса'}
                </span>
            </div>
            :
            <div>
                <input value={statusState}
                    onChange={onStatusChange}
                    autoFocus onBlur={diactivetEditMode}
                    type="text" />
            </div>
        }
    </div >
    )

}
