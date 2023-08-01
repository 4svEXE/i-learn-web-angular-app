import { Component } from "@angular/core";
import { LanguageService } from "src/app/shared/services/language.service";
import { ThemeService } from "src/app/shared/services/theme.service";
import { SettingsService } from "./../../shared/services/settings.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent {
  imgPath: string = "assets/images/pages/settings/";
  host: string = "i-learn-web-angular-app";

  localesList = [
    { code: "en-US", label: "English", img: "usa-flag.svg" },
    { code: "ua", label: "Українська", img: "ua-flag.svg" },
  ];

  themes = [
    { code: "dark", label: "dark", img: "moon.svg" },
    { code: "light", label: "light", img: "sun.svg" },
  ];

  difficultyLevels = ["trainee", "junior", "middle", "senior", "lead"];

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService,
    private settingsService: SettingsService
  ) {}

  // Themes
  setTheme(theme: string) {
    // 'light' | 'dark'
    this.themeService.setTheme(theme);
  }

  isTheSameTheme(theme: string) {
    const currentTheme = this.themeService.getCurrentTheme();
    return currentTheme === theme;
  }

  // Languages
  setLanguage(language: string) {
    this.languageService.setLanguage(language);
  }

  isTheSameLanguage(language: string) {
    const currentLanguage = this.languageService.getCurrentLanguage();
    return currentLanguage === language;
  }

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
