import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "section-ii-assignment-ii-practicing-databinding";
  username = "";

  onClick(): void {
    this.username = "";
  }
}
