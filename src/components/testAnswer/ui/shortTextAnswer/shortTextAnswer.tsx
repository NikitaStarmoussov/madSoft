import { FC } from 'react'
import { classNames } from '../../../../utils/classNames'
import "./shortTextAnswer.css"

interface ShortTextAnswerProps {
    handler: (event: React.ChangeEvent) => void,

    className?: string
}

export const ShortTextAnswer: FC<ShortTextAnswerProps> = ({ handler, className = "" }) => {
    return <>
        <textarea className={classNames("short-text-answer", {}, [className])} maxLength={20} name="answer" onChange={handler} />
    </>

}
