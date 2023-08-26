import React from 'react'
import { UserItemType } from '../../redux/users-reducer'
import { S } from './users_style'

export const Users = (props: any) => {
    console.log(props.users)
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://img.championat.com/s/735x490/news/big/c/c/gennadij-golovkin-osvobodil-titul-chempiona-mira-v-srednem-vese-po-versii-ibo_16868170831165199102.jpg', followed: true, fullName: 'Daniil', status: 'i still trying', location: { city: 'Solik', country: 'Russia' } },
            { id: 1, photoUrl: 'https://img.championat.com/s/735x490/news/big/c/c/gennadij-golovkin-osvobodil-titul-chempiona-mira-v-srednem-vese-po-versii-ibo_16868170831165199102.jpg', followed: false, fullName: 'Sveta', status: 'i still trying', location: { city: 'Moskva', country: 'Russia' } },
            { id: 1, photoUrl: 'https://img.championat.com/s/735x490/news/big/c/c/gennadij-golovkin-osvobodil-titul-chempiona-mira-v-srednem-vese-po-versii-ibo_16868170831165199102.jpg', followed: true, fullName: 'Max', status: 'i still trying', location: { city: 'EKB', country: 'Russia' } }
        ])
    }

    return <div>
        {
            props.users.map((user: UserItemType) => <div key={user.id}>
                <span>
                    <div>
                        <S.ImageAvatar src={user.photoUrl} alt="avatar" />
                    </div>
                    <div>
                        работает но неправильно
                        {
                            user.followed ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(user.id)}>Follow</button>
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