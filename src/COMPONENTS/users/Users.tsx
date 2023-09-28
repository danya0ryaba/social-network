import React from 'react'
import { S } from './users_style'
import { UserItemType } from '../../redux/users-reducer'
import userPhoto from '../../assets/users/984126_avatar_male_man_user_person_icon.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

type UsersPropsType = {
    users: UserItemType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onChangePages: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users: React.FC<UsersPropsType> = ({
    totalUsersCount,
    pageSize,
    currentPage,
    users,
    onChangePages,
    follow,
    unfollow
}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pagesArray = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }
    const curPF = ((currentPage - 5) < 0) ? 0 : currentPage - 5;
    const slicedPages = pagesArray.slice(curPF, currentPage + 5);


    const requestFollow = () => {
        axios.post('https://social-network.samuraijs.com/api/1.0/follow/2')
            .then(response => {

            })
    }

    const requestUnfollow = () => {

    }

    return <div>
        <div>

            {slicedPages.map<JSX.Element>((el: number, index) => {
                return <S.MySpan onClick={(e) => onChangePages(el)} key={index}>{el}</S.MySpan>
            })}

        </div>
        {users.map((user: UserItemType, index: number) => <div key={index}>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <S.ImageAvatar src={user.photos.small !== null ? user.photos.small : userPhoto} alt="avatar" />
                    </NavLink>

                </div>
                <div>
                    {user.followed ?


                        <button onClick={() => {

                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "0411e24e-f7ad-4c92-8265-27c8903329a2"
                                }
                            }).then(response => {
                                if (response.data.resultCode == 0) {
                                    unfollow(user.id)
                                }
                            })

                        }}>Unfollow</button>

                        : <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "0411e24e-f7ad-4c92-8265-27c8903329a2"
                                }
                            }).then(response => {
                                if (response.data.resultCode == 0) {
                                    follow(user.id)
                                }
                            })
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>

                <span>
                    <div>'user.location.country'</div>
                    <div>user.location.city</div>
                </span>
            </span>
        </div>)}
    </div >
}
