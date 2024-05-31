import { FC } from 'react'
import { classNames } from '../../../../utils/classNames'
import { OneChoice } from './oneChoice/oneChoice'
import "./oneChoiceList.css"

interface OneChoiceListProps {
    handler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    choices: string[],
    className?: string
}

export const OneChoiceList: FC<OneChoiceListProps> = ({ handler, choices, className = "" }) => {
    return (<ul className={classNames("one-choice-list", {}, [className])}>
        {choices.map((choice) => <OneChoice key={choice} handler={handler} choice={choice} className={className} />)}
    </ul>
    )

}
