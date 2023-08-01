import { Component } from "@angular/core";
import { LocalesList, Themes } from "src/app/db/";
import { LanguageService } from "src/app/shared/services/language.service";
import { ThemeService } from "src/app/shared/services/theme.service";

@Component({
  selector: "app-general-settings",
  templateUrl: "./general-settings.component.html",
  styleUrls: ["./general-settings.component.scss"],
})
export class GeneralSettingsComponent {
  // Path to the images for settings page
  IMG_PATH: string = "assets/images/pages/settings/";

  // Host name for the web application
  HOST: string = "i-learn-web-angular-app";

  localesList = LocalesList;
  themes = Themes;

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService
  ) {}

  // Themes

  // Set the selected theme for the application
  // Theme can be either 'light' or 'dark'
  setTheme(theme: string) {
    this.themeService.setTheme(theme);
  }

  // Check if the current theme is the same as the provided theme
  isTheSameTheme(theme: string) {
    const currentTheme = this.themeService.getCurrentTheme();
    return currentTheme === theme;
  }

  // Languages

  // Set the selected language for the application
  setLanguage(language: string) {
    this.languageService.setLanguage(language);
  }

  // Check if the current language is the same as the provided language
  isTheSameLanguage(language: string) {
    const currentLanguage = this.languageService.getCurrentLanguage();
    return currentLanguage === language;
  }
}
