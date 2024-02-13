import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userFirstName: string="";
  userLastName: string="";
  agency: string="";
  email: string ="";
  password: string ="";
  constructor(private http: HttpClient )
  {
  }
  save()
  {
  
    let bodyData = {
      "firstName" : this.userFirstName,
      "lastName"  : this.userLastName,
      "agency"    : this.agency,
      "email" : this.email,
      "password" : this.password
    };
    this.http.post("http://localhost:8081/api/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully");
    });
  }


  ngOnInit(): void {
  }

}
