import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ThemeToggleDirective } from "./shared/directives/theme-toggle.directive";
import { WithThemeComponent } from "./shared/providers/with-theme/with-theme.component";
import { UiKitComponent } from './layout/ui-kit/ui-kit.component';

@NgModule({
  declarations: [AppComponent, ThemeToggleDirective, WithThemeComponent, UiKitComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
