import { FC } from 'react'
import { classNames } from '../../../utils/classNames'
import { questionTypes } from '../../../types/tests.types'
import { OneChoice } from './oneChoice/oneChoice'
import { MultipleChoice } from './mulitpleChoice/multipleChoice'


interface TestChoiceProps {
    //todo add type for choice
    choice: string,
    handler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    type: questionTypes,
    className?: string
}



function getChoiceComponentByType(type: questionTypes, handler: (event: React.ChangeEvent<HTMLInputElement>) => void, choice: string) {
    switch (type) {
        case questionTypes.multipleChoice:
            //todo add correct component
            return <MultipleChoice handler={handler} choice={choice} />
        case questionTypes.oneChoice:
            return <OneChoice handler={handler} choice={choice} />
    }
}

export const TestChoice: FC<TestChoiceProps> = ({ type, choice, handler, className = "" }) => {
    const choiceComponent = getChoiceComponentByType(type, handler, choice)
    return <li className={classNames("", {}, [className])} >
        {choiceComponent}
    </li>
}
