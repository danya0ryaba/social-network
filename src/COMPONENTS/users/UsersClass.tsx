import React from 'react'
import { UserItemType, UsersType } from '../../redux/users-reducer'
import { S } from './users_style'


// дял типизиции класса (class UsersClass extends React.Component<{}, {}>) этой строки используются 2 параметра
// 1 это типизация пропсов
// 2 это типизация state

interface MyClassUsersProps {
    users: UserItemType[]
    setUsers: (users: UserItemType[]) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export class UsersClass extends React.Component<MyClassUsersProps> {
    componentDidMount(): void {

        this.props.setUsers([
            { id: 1, photoUrl: 'https://img.championat.com/s/735x490/news/big/c/c/gennadij-golovkin-osvobodil-titul-chempiona-mira-v-srednem-vese-po-versii-ibo_16868170831165199102.jpg', followed: true, fullName: 'Daniil', status: 'i still trying', location: { city: 'Solik', country: 'Russia' } },
            { id: 2, photoUrl: 'https://img.championat.com/s/735x490/news/big/c/c/gennadij-golovkin-osvobodil-titul-chempiona-mira-v-srednem-vese-po-versii-ibo_16868170831165199102.jpg', followed: false, fullName: 'Sveta', status: 'i still trying', location: { city: 'Moskva', country: 'Russia' } },
            { id: 3, photoUrl: 'https://img.championat.com/s/735x490/news/big/c/c/gennadij-golovkin-osvobodil-titul-chempiona-mira-v-srednem-vese-po-versii-ibo_16868170831165199102.jpg', followed: true, fullName: 'Max', status: 'i still trying', location: { city: 'EKB', country: 'Russia' } }
        ])

    }
    render() {
        console.log(this.props)
        return <div>
            {
                this.props.users.map((user: UserItemType, index: number) => <div key={index}>
                    <span>
                        <div>
                            <S.ImageAvatar src={user.photoUrl} alt="avatar" />
                        </div>
                        <div>
                            работает но неправильно
                            {
                                user.followed ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                                    : <button onClick={() => this.props.follow(user.id)}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>

                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    }

}   
