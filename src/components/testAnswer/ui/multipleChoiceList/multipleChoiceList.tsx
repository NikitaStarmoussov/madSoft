import { FC } from 'react'

import { MultipleChoice } from './multipleChoice/multipleChoice'

import './multipleChoiceList.css'

interface MultipleChoiceListProps {
    handler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    choices: string[]
    className?: string
}

export const MultipleChoiceList: FC<MultipleChoiceListProps> = ({ handler, choices, className = "" }) => {
    return (<ul className='multiple-choice-list'>
        {choices.map((choice) => <MultipleChoice key={choice} handler={handler} choice={choice} className={className} />)}
    </ul>
    )
}
