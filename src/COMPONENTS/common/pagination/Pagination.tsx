import React from 'react'
import { S } from '../../users/users_style'

type PaginationPropsType = {
    totalUsersCount: number
    pageSize: number
    onChangePages: (pageNumber: number) => void
}


export const Pagination: React.FC<PaginationPropsType> = ({ totalUsersCount, pageSize, onChangePages }) => {


    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pagesArray = []

    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }
    // не работает хз почему
    // в место перебора pagesArray должен быть  slicedPages

    // const curPF = ((currentPage - 5) < 0) ? 0 : currentPage - 5;
    // const slicedPages = pagesArray.slice(curPF, currentPage + 5);

    return <div>
        {pagesArray.map<JSX.Element>((el: number, index) => {
            return <S.MySpan onClick={(e) => onChangePages(el)} key={index}>{el}</S.MySpan>
        })}
    </div>


}
