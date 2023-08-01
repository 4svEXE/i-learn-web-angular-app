import { Component } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-breadcrumps",
  templateUrl: "./breadcrumps.component.html",
  styleUrls: ["./breadcrumps.component.scss"],
})
export class BreadcrumpsComponent {
  currentUrl: string = "";

  constructor(private location: Location) {
    this.location.onUrlChange((url) => {
      this.currentUrl = url.substring(1);
    });
  }
}
