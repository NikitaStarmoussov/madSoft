export enum questionTypes { oneChoice = "one choice" }

export type question = {
    type: questionTypes,
    data: {
        question: string,
        choices: string[],
    }

}

export type testData = {
    time: string,
    data: question[],
}

export const testMockData: testData = {
    //todo maybe change min to sec
    time: "15",
    data: [
        {
            type: questionTypes.oneChoice,
            data: {
                question: "question 1",
                choices: ["a", "b", "c", "d"],
            }
        },
        {
            type: questionTypes.oneChoice,
            data: {
                question: "question 2",
                choices: ["a", "b", "c", "d"],
            }
        },
        {
            type: questionTypes.oneChoice,
            data: {
                question: "question 3",
                choices: ["a", "b", "c", "d"],
            }
        },
        {
            type: questionTypes.oneChoice,
            data: {
                question: "question 4",
                choices: ["a", "b", "c", "d"],
            }
        },
        {
            type: questionTypes.oneChoice,
            data: {
                question: "question 5",
                choices: ["a", "b", "c", "d"],
            }
        }
    ]

}