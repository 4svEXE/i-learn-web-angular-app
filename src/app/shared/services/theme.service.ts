import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme!: string;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);

    this.setTheme(this.getCurrentTheme());
    console.log('this.getCurrentTheme() :>> ', this.getCurrentTheme());
  }


  setTheme(theme: string): void {
    this.currentTheme = this.getCurrentTheme();

    // delete previous theme
    this.renderer.removeClass(document.body, this.currentTheme);

    // add new theme
    this.renderer.addClass(document.body, theme);
    localStorage.setItem("theme", theme);
  }

  getCurrentTheme() {
    return localStorage.getItem("theme") || "light";
  }
}
