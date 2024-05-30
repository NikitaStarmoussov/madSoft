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