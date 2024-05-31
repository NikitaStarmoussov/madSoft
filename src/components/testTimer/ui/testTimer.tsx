import { FC, useContext, useEffect, useState } from 'react'
import { classNames } from '../../../utils/classNames'
import { formatTime } from '../../../utils/formatTime'
import { QuestionsContext } from '../../../providers/questionsContext'
import "./testTimer.css"


interface TestTimerProps {
    className?: string,
    isStarted: boolean,
    setIsStarted: (isStarted: boolean) => void,
}

//todo bug with time - when the tab is inactive - negative time
export const TestTimer: FC<TestTimerProps> = ({ className = "", isStarted, setIsStarted }) => {
    const state = useContext(QuestionsContext);

    const startTime = new Date().getTime()
    const timeLimit = Number(state.data.time) * 60
    const [timeLeft, setTimeLeft] = useState(timeLimit);

    useEffect(() => {
        if (isStarted) {
            const timer = setInterval(() => {
                const timeNow = new Date().getTime();
                setTimeLeft(() => {
                    return timeLimit - Math.round((timeNow - startTime) / 1000);
                });
            }, 1000);

            return () => {
                clearInterval(timer);
            };
        }
    }, [isStarted]);

    useEffect(() => {
        if (timeLeft === 0) {
            //todo add correct test finish
            setIsStarted(false);
        }
    }, [timeLeft]);


    return <span className={classNames("test-timer", {}, [className])}>
        {formatTime(timeLeft)}
    </span>
}
