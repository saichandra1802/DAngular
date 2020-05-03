import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/_services/auth.service";
import { AlertifyService } from "src/app/_services/alertify.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(
    public authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}
  login() {
  
    this.authService.login(this.model).subscribe(
      (next) => {
        console.log("Logged in Successfully");
        this.alertify.success("Logged in Successfully");
      },
      (error) => {
        console.log(error);
        this.alertify.error(error);
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
    // const token = localStorage.getItem("token");
    // return !!token;
  }
  loggOut() {
    debugger;
    localStorage.removeItem("token");
    console.log("logged Out");
    this.alertify.message("logged Out");
  }
}
