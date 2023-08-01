import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ThemeToggleDirective } from "./shared/directives/theme-toggle.directive";
import { WithThemeComponent } from "./shared/providers/with-theme/with-theme.component";
import { UiKitComponent } from "./layout/ui-kit/ui-kit.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { PreparationForTheTestComponent } from "./pages/preparation-for-the-test/preparation-for-the-test.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { AccountComponent } from "./pages/account/account.component";
import { TestComponent } from "./pages/test/test.component";
import { TestResultsComponent } from "./pages/test-results/test-results.component";

@NgModule({
  declarations: [
    AppComponent,
    ThemeToggleDirective,
    WithThemeComponent,
    UiKitComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PreparationForTheTestComponent,
    SettingsComponent,
    AccountComponent,
    TestComponent,
    TestResultsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
