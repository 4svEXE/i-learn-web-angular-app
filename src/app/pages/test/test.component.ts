import { Component } from "@angular/core";
import { Router } from '@angular/router';

import { Questions } from "./../../db/Questions";
import {
  QuestionResultInterface,
  QuestionInterface,
  AnswerInterface,
} from "src/app/interfaces";
import { UserService } from "./../../shared/services/user.service";
import { SettingsService } from "src/app/shared/services/settings.service";
import { TestsFilterService } from "src/app/shared/services/tests-filter.service";
import { QuestionsService } from "src/app/shared/services/questions.service";
import { TestResultsService } from "src/app/shared/services/test-results.service";


@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent {
  config = {
    selectedTech: [""],
    quantityQuestions: 20,
    difficultyLevel: "junior",
  };

  questions: QuestionInterface[] = Questions;
  filteredQuestions!: any[];

  currentQuestion: number = 0;
  questionResults: QuestionResultInterface[] = [];

  randomizedAnswers!: AnswerInterface[];
  currentUserAnswer!: QuestionResultInterface;

  constructor(
    private router: Router,
    private userService: UserService,
    private settingsService: SettingsService,
    private testsFilterService: TestsFilterService,
    private questionsService: QuestionsService,
    private testResultsService: TestResultsService
  ) {
    this.config.selectedTech = userService.getSelectedTechnologies();
    this.config.quantityQuestions = settingsService.getQuantityOfQuestions();
    this.config.difficultyLevel = settingsService.getDifficultyLevel();

    this.filteredQuestions = testsFilterService.filterAllQuestions(
      this.questions,
      this.config
    );

    this.currentUserAnswer = this.questionsService.getEmptyQuestion();

    this.randomizedAnswers = this.getRandomizedAnswers();
  }

  isActiveProgressCircle(i: number) {
    return this.currentQuestion === i;
  }

  isRightAnswer(i: number) {
    const userAnswer = this.questionResults[i]?.userAnswer || undefined;

    if (userAnswer === undefined) return "";

    if (userAnswer.isCorrect) {
      return "right";
    } else {
      return "wrong";
    }
  }

  redirectToTestResults() {
    const allResults = this.testResultsService.getAllTestsResults()
    this.router.navigate(['home/test-result/', allResults.length - 1]);
  }

  getRandomizedAnswers(): AnswerInterface[] {
    let answers = this.filteredQuestions[this.currentQuestion].answers;
    return answers.sort(() => Math.random() - 0.5);
  }

  saveTestResults() {
    this.testResultsService.setResults(this.questionResults);

    this.redirectToTestResults()
  }

  setAnswer(title: string, isCorrect: boolean) {
    

    this.currentUserAnswer.questionID = this.filteredQuestions[
      this.currentQuestion
    ].id;
    this.currentUserAnswer.userAnswer.title = title;
    this.currentUserAnswer.userAnswer.isCorrect = isCorrect;
  }

  saveAnswerToAnswers() {
    this.questionResults.push(this.currentUserAnswer);

    
  }

  nextQuestion() {
    const isEnd = this.questionsService.nextQuestionHandler(
      this.currentQuestion,
      this.config
    );

    this.saveAnswerToAnswers();

    this.currentUserAnswer = this.questionsService.getEmptyQuestion();

    
    if (!isEnd) {
      console.log('isEnd :>> ', isEnd);
      this.saveTestResults();
    }
    
    this.currentQuestion++;
    
    this.randomizedAnswers = this.getRandomizedAnswers();
  }
}
