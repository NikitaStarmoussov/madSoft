import { FC, useContext } from 'react'
import { classNames } from '../../../utils/classNames'
import { QuestionsContext } from '../../../providers/questionsContext';
import "./testProgress.css"


interface TestProgressProps {
    className?: string
}

export const TestProgress: FC<TestProgressProps> = ({ className = "" }) => {
    const state = useContext(QuestionsContext);
    const currentQuestion = state.currentQuestion;

    return <ul className={classNames("test-progress", {}, [className])}>
        {state.data.data.map((data, index) => <li key={data.type} className={classNames("test-progress__item", { active: currentQuestion === index, completed: currentQuestion > index },)}></li>)
        }
    </ul >
}
