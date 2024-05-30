import { FC } from 'react'
import { classNames } from '../../../../utils/classNames'

interface ShortTextAnswerProps {
    handler: (event: React.ChangeEvent<HTMLInputElement>) => void,

    className?: string
}

export const ShortTextAnswer: FC<ShortTextAnswerProps> = ({ handler, className = "" }) => {
    return <>
        <input className={classNames("", {}, [className])} type="text" name="answer" onChange={handler} />
        <label htmlFor="answer1"></label>
    </>

}
