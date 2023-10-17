import React from 'react'
import { S } from '../../users/users_style'

type PaginationPropsType = {
    totalUsersCount: number
    currentPage: any
    pageSize: number
    onChangePages: (pageNumber: number) => void
    portionSize: number
}


export const Pagination: React.FC<PaginationPropsType> = ({ portionSize, currentPage, totalUsersCount, pageSize, onChangePages }) => {

    const pagesnCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 0; i < pagesnCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesnCount / portionSize)
    const [portionNumber, setPotionNumber] = React.useState(1)
    const leftPortionNumberPage = (portionNumber - 1) * portionSize + 1
    const rightPortionNumberPage = portionNumber * portionSize
    return <div>
        {portionNumber > 1 && <button onClick={() => { setPotionNumber(portionNumber - 1) }}>PREV</button>}
        {pages.filter(u => u > +leftPortionNumberPage && u <= rightPortionNumberPage)
            .map(u => {
                return <span key={u} onClick={() => { onChangePages(u) }}>{u}</span>
            })}
        {portionCount > portionNumber && <button onClick={() => { setPotionNumber(portionNumber + 1) }}>NEXT</button>}
    </div>


}
