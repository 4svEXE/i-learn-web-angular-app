import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-toggle-full-screen",
  templateUrl: "./toggle-full-screen.component.html",
  styleUrls: ["./toggle-full-screen.component.scss"],
})
export class ToggleFullScreenComponent {
  readonly IMG_PATH = 'assets/images/widgets/fullScreen/'
  isFullscreen: boolean = false;
  image: string = 'open.svg'

  ngOnInit() {
    document.addEventListener(
      "fullscreenchange",
      this.onFullscreenChange.bind(this)
    );
  }

  ngOnDestroy() {
    document.removeEventListener(
      "fullscreenchange",
      this.onFullscreenChange.bind(this)
    );
  }

  @HostListener("window:keyup", ["$event"])
  onKeyUp(event: KeyboardEvent) {
    if (event.key === "F11") {
      this.toggleFullscreen();
    }
  }

  toggleFullscreen() {
    if (this.isFullscreen) {
      this.exitFullscreen();
      this.image = 'close.svg';
    } else {
      this.enterFullscreen();
      this.image = 'open.svg';
    }
  }

  enterFullscreen() {
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    }
  }

  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  onFullscreenChange() {
    this.isFullscreen = !this.isFullscreen;
  }
}
