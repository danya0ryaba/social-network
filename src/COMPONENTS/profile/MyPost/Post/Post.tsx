import { S } from './post_style'

type PropsType = {
    message: string | undefined
    like: number
}

export const Post = (props: PropsType) => {
    return (
        <div>
            <div>
                <S.Ava src="https://www.peoples.ru/sport/boxer/archie_moore/moore_3.jpg" alt="" />

                <span>{props.message}</span>

                <div>
                    <span>like {props.like}</span>
                </div>
            </div>
        </div>
    )
}