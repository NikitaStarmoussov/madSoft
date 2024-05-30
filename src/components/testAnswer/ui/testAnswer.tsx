import { FC } from 'react'
import { classNames } from '../../../utils/classNames'
import { questionTypes } from '../../../types/tests.types'
import { ShortTextAnswer } from './shortTextAnswer/shortTextAnswer'
import { testMockData } from '../../../data/test-mock.data'
import { MultipleChoiceList } from './multipleChoiceList/multipleChoiceList'
import { OneChoiceList } from './oneChoiceList/oneChoiceList'


interface TestChoiceProps {
    handler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    className?: string
}



function getChoiceComponentByType(handler: (event: React.ChangeEvent<HTMLInputElement>) => void) {
    const data = testMockData.data[0];
    //todo when adding a new type so that the typescript swears
    switch (data.type) {
        case questionTypes.multipleChoiceAnswer:
            return <MultipleChoiceList handler={handler} choices={data.data.choices} />
        case questionTypes.oneChoiceAnswer:
            return <OneChoiceList handler={handler} choices={data.data.choices} />
        case questionTypes.shortTextAnswer:
            return <ShortTextAnswer handler={handler} />
        case questionTypes.longTextAnswer:
            //todo add long text component
            return <ShortTextAnswer handler={handler} />
    }
}

export const TestChoice: FC<TestChoiceProps> = ({ handler, className = "" }) => {
    const choiceComponent = getChoiceComponentByType(handler)
    return <li className={classNames("", {}, [className])} >
        {choiceComponent}
    </li>
}