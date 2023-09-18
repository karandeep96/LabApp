import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = "";
  password = "";
  firstName = "";
  lastName = "";
  phoneNumber = "";

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    console.log("Clicked");
  }

}
