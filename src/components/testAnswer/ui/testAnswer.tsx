import { FC, useContext } from 'react'
import { questionTypes } from '../../../types/tests.types'
import { ShortTextAnswer } from './shortTextAnswer/shortTextAnswer'
import { MultipleChoiceList } from './multipleChoiceList/multipleChoiceList'
import { OneChoiceList } from './oneChoiceList/oneChoiceList'
import { QuestionsContext } from '../../../providers/questionsContext'
import { LongTextAnswer } from './longTextAnswer/longTextAnswer'


interface TestChoiceProps {
    handler: (event: React.ChangeEvent) => void,
    className?: string
}



function getChoiceComponentByType(handler: (event: React.ChangeEvent) => void) {
    const data = useContext(QuestionsContext);
    //todo refactor this
    const curData = data.data.data[data.currentQuestion];


    //todo when adding a new type so that the typescript swears
    switch (curData.type) {
        case questionTypes.multipleChoiceAnswer:
            return <MultipleChoiceList handler={handler} choices={curData.data.choices} />
        case questionTypes.oneChoiceAnswer:
            return <OneChoiceList handler={handler} choices={curData.data.choices} />
        case questionTypes.shortTextAnswer:
            return <ShortTextAnswer handler={handler} />
        case questionTypes.longTextAnswer:
            return <LongTextAnswer handler={handler} />
    }
}

export const TestChoice: FC<TestChoiceProps> = ({ handler }) => {
    const choiceComponent = getChoiceComponentByType(handler)
    return choiceComponent
}
