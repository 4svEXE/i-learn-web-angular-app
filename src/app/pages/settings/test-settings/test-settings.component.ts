import { Component } from "@angular/core";
import { SettingsService } from "./../../../shared/services/settings.service";
import { DifficultyLevels } from "src/app/db";

@Component({
  selector: "app-test-settings",
  templateUrl: "./test-settings.component.html",
  styleUrls: ["./test-settings.component.scss"],
})
export class TestSettingsComponent {
  difficultyLevels = DifficultyLevels;

  constructor(private settingsService: SettingsService) {}

  // settingsService
  setQuantityOfQuestions(quantity: number | string) {
    if (typeof quantity == "string") quantity = parseInt(quantity);
    this.settingsService.setQuantityOfQuestions(quantity);
  }

  isTheSameQuantityOfQuestions(quantity: number) {
    const currentLanguage = this.settingsService.getQuantityOfQuestions();
    return currentLanguage === quantity;
  }

  //  Difficulty level
  setDifficultyLevel(level: string) {
    this.settingsService.setDifficultyLevel(level);
  }

  isTheSameDifficultyLevel(level: string) {
    const currentLevel = this.settingsService.getDifficultyLevel();
    return currentLevel === level;
  }
}
