import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any;
  myform!: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })
    this.getlogin();

  }
  getlogin() {
    this.login = {
      username: "Tablabs@gmail.com",
      password: "Tablabs@123"

    }
  }

  submit() {
    console.log(this.myform.value);
    
    if (this.myform.valid) {
      if (this.login.username == this.myform.value.username && this.login.password == this.myform.value.password) {
        this.router.navigate(["/home"])

      }
      else { alert("invalid username password") }
    }
    else {
      alert("please fill the form")
    }
  }
}
