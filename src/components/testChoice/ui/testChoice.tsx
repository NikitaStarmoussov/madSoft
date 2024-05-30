import { FC } from 'react'
import { classNames } from '../../../utils/classNames'


interface TestChoiceProps {
    //todo add type for choice
    choice: string,
    handler: (event: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
}

export const TestChoice: FC<TestChoiceProps> = ({ choice, handler, className = "" }) => {
    return <li className={classNames("", {}, [className])} >
        <input type="radio" name="answer" value={choice} onChange={handler} />
        <label htmlFor="answer1">{choice}</label>
    </li>
}
