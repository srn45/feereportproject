import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { MaterialModule } from '../material.module'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  empform = new FormGroup({

    firstname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(8), Validators.pattern('[a-zA-Z ]*')])),
    lastname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
    mobile: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')])),
    regnumber: new FormControl('', Validators.compose([Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]*')])),
    dob: new FormControl('', Validators.compose([Validators.required])),
    gender: new FormControl(),
    branch: new FormControl('',Validators.compose([Validators.required])),
    year: new FormControl(),
    adress: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(8), Validators.pattern('[a-zA-Z ]*')])),
    pincode: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]*')])),
    email: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(19), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]))
  });
  SaveEmpolyee(data: any) {
    if (this.empform.valid) {
      console.log(data.value)
    }
    else {
      this.errormessage = "Please enter valid data";
      this.errorclass = "errormessage";
    }
  }
  ngOnInit(): void {
  }

  errormessage = '';
  errorclass = '';

  get firstname() {
    return this.empform.get("firstname");
  }
  get lastname() {
    return this.empform.get("lastname");
  }
  get email() {
    return this.empform.get("email");
  }
  get mobile() {
    return this.empform.get("mobile");
  }
  get regnumber() {
    return this.empform.get("regnumber");
  }
  get pincode() {
    return this.empform.get("pincode");
  }
  get adress() {
    return this.empform.get("adress");
  }
  get dob() {
    return this.empform.get("dob");
  }


}
