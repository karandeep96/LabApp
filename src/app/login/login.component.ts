import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    console.log("Clicked");
  }
}