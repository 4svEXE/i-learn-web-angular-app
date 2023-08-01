import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  localesList = [
    { code: "en-US", label: "English" },
    { code: "ua", label: "Українська" },
  ];
}
