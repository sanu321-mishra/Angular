import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title:string='learning angular';
  public topic:string='About data binding';
  username:string="Angular";

  //prperty binding

  public img1="./assets/delhi.jpg";

  //interpolation for an array value

  public empname=["raam","shyam","radha"];

  //for name
  public uname:string |undefined
  public pwd:string | undefined


  constructor() { }

  ngOnInit(): void {
  }
  Onclick(){
    alert("hello world "+this.uname+this.pwd)
    this.uname=""; 
    this.pwd="";
  }

}
