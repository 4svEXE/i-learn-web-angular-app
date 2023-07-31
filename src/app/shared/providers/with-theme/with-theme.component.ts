import { Component } from "@angular/core";
import { ThemeService } from "../../services/theme.service";

@Component({
  selector: "app-with-theme",
  templateUrl: "./with-theme.component.html",
  styleUrls: ["./with-theme.component.scss"],
})
export class WithThemeComponent {
  currentTheme: string = "light";

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.setCurrentTheme();
  }

  setCurrentTheme() {
    this.currentTheme = this.themeService.getCurrentTheme();
    this.themeService.setTheme(this.currentTheme);
  }
}
