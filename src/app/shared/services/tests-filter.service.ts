import { Injectable } from "@angular/core";
import { QuestionInterface } from "src/app/interfaces";

@Injectable({
  providedIn: "root",
})
export class TestsFilterService {
  constructor() {}

  filterAllQuestions(questions: QuestionInterface[], config: any) {
    let bySelectedTech = this.filterBySelectedTech(questions, config);
    let byDifficulty = this.filterByDifficultyLevel(bySelectedTech, config);
    let result = this.reduceAndRandomize(byDifficulty, config);

    return result || [""];
  }

  filterBySelectedTech(questions: QuestionInterface[], config: any) {
    let filteredQuestions: QuestionInterface[] = [];

    config.selectedTech.forEach((technology: string) => {
      let tmp: QuestionInterface[] = questions.filter((question) => {
        return question.technology === technology;
      });

      filteredQuestions = filteredQuestions.concat(tmp);
    });

    return filteredQuestions;
  }

  filterByDifficultyLevel(questions: QuestionInterface[], config: any) {
    return questions.filter((question) => {
      return question.level === config.difficultyLevel;
    });
  }

  reduceAndRandomize(questions: QuestionInterface[], config: any) {
    // Randomize questions array
    questions.sort((a, b) => Math.random() - 0.5);

    console.log('questions :>> ', questions);

    questions.length = config.quantityQuestions;

    return questions;
  }
}
