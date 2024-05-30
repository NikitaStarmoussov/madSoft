import { FC } from 'react'
import { classNames } from '../../../../utils/classNames'

interface MultipleChoiceProps {
    handler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    choice: string
    className?: string
}

export const MultipleChoice: FC<MultipleChoiceProps> = ({ handler, choice, className = "" }) => {
    return <>
        <input className={classNames("", {}, [className])} type="checkbox" name="answer" value={choice} onChange={handler} />
        <label htmlFor="answer1">{choice}</label>
    </>

}
