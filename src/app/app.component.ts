import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input';

  // description="i am vishal ";

  // student=[{
  //   name:"vishal",
  //   biodata:"Fulllstack developer",
  //   age:20,
  // }]


  // student=["vishal","sanap"];

  // company="the baap company";

  // collegeName="bgp sahyadri junior college sangamner"

  //   child="child and parent is working"


  //   data="vishal"

  // users=[''];

  // addUser(data:any){
  //   this.users.push(data);
  // }
  // }

  // save():any{
  //   alert("hello vishal")
  //     }



  form: any = FormGroup;
  constructor(private fb: FormBuilder, private services: ServicesService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      phone: ['']
    });
  }
  submit() {
    console.log(this.form.value);
    this.services.postData(this.form.value).subscribe((data) => {
      console.log(data)
      alert("data save");
    })


    this.services.getData(this.form.value).subscribe((data) => {
      console.log(data);
      this.userData = data
    });

    this.services.putData(this.form.id).subscribe((data) => {

    })
  }

  allData(id: any) {
    this.services.deleteData(this.clearData = id).subscribe((data) => {
      console.log(data);
      this.submit();

    })
  }


  userData: any
  clearData: any







}