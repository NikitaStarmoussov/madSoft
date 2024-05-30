import { FC } from 'react'
import { classNames } from '../../../../utils/classNames'

interface OneChoiceProps {
    handler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    choice: string
    className?: string
}

export const OneChoice: FC<OneChoiceProps> = ({ handler, choice, className = "" }) => {
    return <>
        <input className={classNames("", {}, [className])} type="radio" name="answer" value={choice} onChange={handler} />
        <label htmlFor="answer1">{choice}</label>
    </>

}
