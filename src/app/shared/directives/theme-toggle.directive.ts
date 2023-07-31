// theme-toggle.directive.ts
import { Directive, HostListener } from "@angular/core";
import { ThemeService } from "../services/theme.service";

@Directive({
  selector: "[appThemeToggle]",
})
export class ThemeToggleDirective {
  constructor(private themeService: ThemeService) {}

  @HostListener("click")
  onClick(): void {
    this.toggleTheme();
  }

  private toggleTheme(): void {
    const currentTheme = this.themeService.getCurrentTheme();
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    this.themeService.setTheme(nextTheme);
  }
}
