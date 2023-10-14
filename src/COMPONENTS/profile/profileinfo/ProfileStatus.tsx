import React, { ChangeEvent } from 'react'
import { ProfilePropsType } from '../Profile'

type ProfileStatusPropsType = Omit<ProfilePropsType, 'profile'>

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>): void {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        let newStatus = e.currentTarget.value
        this.setState({
            status: newStatus
        })
    }

    activetEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    diactivetEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    render() {
        return (<div>
            {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.activetEditMode}>
                        {this.props.status || 'Нет статуса'}
                    </span>
                </div>
                :
                <div>
                    <input onChange={this.onStatusChange}
                        autoFocus onBlur={this.diactivetEditMode}
                        type="text" value={this.state.status} />
                </div>
            }
        </div >
        )
    }
}