import { testData, questionTypes } from "../types/tests.types";

export const testMockData: testData = {
    //todo maybe change min to sec
    time: "15",
    data: [
        {
            type: questionTypes.shortTextAnswer,
            data: {
                question: "question 1",
                choices: null,
            }
        },
        {
            type: questionTypes.multipleChoiceAnswer,
            data: {
                question: "question 2",
                choices: ["a", "b", "c", "d"],
            }
        },
        {
            type: questionTypes.oneChoiceAnswer,
            data: {
                question: "question 3",
                choices: ["a", "b", "c", "d"],
            }
        },
        // {
        //     type: questionTypes.oneChoice,
        //     data: {
        //         question: "question 4",
        //         choices: ["a", "b", "c", "d"],
        //     }
        // },
        // {
        //     type: questionTypes.oneChoice,
        //     data: {
        //         question: "question 5",
        //         choices: ["a", "b", "c", "d"],
        //     }
        // }
    ]

}