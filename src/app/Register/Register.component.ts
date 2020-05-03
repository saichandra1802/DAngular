import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { ThrowStmt } from "@angular/compiler";
import { AuthService } from "../_services/auth.service";
import { AlertifyService } from "../_services/alertify.service";

@Component({
  selector: "app-Register",
  templateUrl: "./Register.component.html",
  styleUrls: ["./Register.component.css"],
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(
    private authservice: AuthService,
    private alertify: AlertifyService

  ) {}

  ngOnInit() {}
  register() {
    debugger;
    this.authservice.Register(this.model).subscribe(
      () => {
        console.log("registration Successfull");
        this.alertify.success("registration Successfull");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
  
    console.log("cancelled");
    this.alertify.warning("cancelled");
  }
}
