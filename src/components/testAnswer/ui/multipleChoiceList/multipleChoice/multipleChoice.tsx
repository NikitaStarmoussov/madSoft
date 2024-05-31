import { FC } from 'react'


interface MultipleChoiceProps {
    handler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    choice: string
    className?: string
}

export const MultipleChoice: FC<MultipleChoiceProps> = ({ handler, choice }) => {
    return <li>
        <input type="checkbox" name="answer" value={choice} onChange={handler} />
        <label htmlFor="answer1">{choice}</label>
    </li>

}
