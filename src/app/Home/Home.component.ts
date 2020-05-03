import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode =false;
  values:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValue();
  }
    registerToggle(){
      this.registerMode=true;
    }

    getValue(){
      this.http.get('https://localhost:44399/api/values').subscribe(response=>{
  
        this.values = response;
      }, error => {
        console.log(error);
      })
  
      
    }
    cancelRegisterMode(registerMode: boolean){
      this.registerMode=registerMode;
    }
}
