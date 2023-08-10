import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { QuestionResultInterface, QuestionInterface, AnswerInterface } from "src/app/interfaces";
import { TestResultsService } from "src/app/shared/services/test-results.service";
import { QuestionsService } from "src/app/shared/services/questions.service";

@Component({
  selector: "app-test-results",
  templateUrl: "./test-results.component.html",
  styleUrls: ["./test-results.component.scss"],
})
export class TestResultsComponent {
  currentQuestionId: number = 0;
  testResultId!: number;
  questionResults: QuestionResultInterface[] = [];

  selectedQuestion!: QuestionInterface;
  userAnswer!: AnswerInterface;
  questionId!: string; // From user answers
  correctAnswer!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private testResultsService: TestResultsService,
    private questionsService: QuestionsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.testResultId = parseInt(params.get("id") || "0");
    });

    this.questionResults = this.testResultsService.getAllTestsResults()[
      this.testResultId
    ];

    this.setCurrentQuestionData()
  }

  // Move to progressbar helper

  isActiveProgressCircle(i: number) {
    return this.currentQuestionId === i;
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

  // Move to progressbar helper

  moveQwestion(position: "next" | "prew") {
    if (position === "next") {
      if (this.currentQuestionId < this.questionResults.length-1) {
        this.currentQuestionId++;
      }
    }
    if (position === "prew") {
      if (this.currentQuestionId > 0) {
        this.currentQuestionId--;
      }
    }

    this.setCurrentQuestionData()
  }

  isDisabled(position: "next" | "prew") {
    if (position === "next") {
      if (this.currentQuestionId === this.questionResults.length - 1) {
        return true;
      }
    }
    if (position === "prew") {
      if (this.currentQuestionId === 0) {
        return true;
      }
    }
    return false;
  }

  // View logic

  setCurrentQuestion(id: string) {
    this.selectedQuestion = this.questionsService.getQuestion(id);
  }

  setQuestionId(id: number){
    this.questionId = this.questionResults[id].questionID
  }
  
  setUserAnswer(id: number){
    this.userAnswer = this.questionResults[id].userAnswer;
  }

  getCorrectAnswer(id: string){
    this.correctAnswer = this.questionsService.getCorrectAnswer(id)
  }

  setCurrentQuestionData(){
    this.setQuestionId(this.currentQuestionId)
    this.setCurrentQuestion(this.questionId);
    this.getCorrectAnswer(this.questionId);
    this.setUserAnswer(this.currentQuestionId);
  }
}