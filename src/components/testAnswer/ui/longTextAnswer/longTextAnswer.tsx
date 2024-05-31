import { FC } from 'react'
import { classNames } from '../../../../utils/classNames'
import "./longTextAnswer.css"

interface LongTextAnswerProps {
    handler: (event: React.ChangeEvent) => void,
    className?: string
}

export const LongTextAnswer: FC<LongTextAnswerProps> = ({ handler, className = "" }) => {
    return <>
        <textarea className={classNames("long-text-answer", {}, [className])} maxLength={1000} name="answer" onChange={handler} />
    </>

}
