import { Injectable } from "@angular/core";
import { QuestionResultInterface } from "src/app/interfaces";

@Injectable({
  providedIn: "root",
})
export class TestResultsService {
  private readonly DEFAULT_TEST_RESULTS = "[]";

  questionResults: QuestionResultInterface[] = [];

  constructor() {}

  getAllTestsResults() {
    let allTestsResults =
      localStorage.getItem("allTestsResults") || this.DEFAULT_TEST_RESULTS;
    return JSON.parse(allTestsResults);
  }

  setAllTestsResults(testResults: QuestionResultInterface[]) {
    const results = JSON.stringify(testResults);
    localStorage.setItem("allTestsResults", results);
  }

  setResults(results: QuestionResultInterface[]) {
    this.questionResults = results;

    const allTestResults = this.getAllTestsResults();
    allTestResults.push(results);

    this.setAllTestsResults(allTestResults);
  }
}
