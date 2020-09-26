import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, } from "@angular/router";
import { FormControl } from '@angular/forms';
import { User } from '../../models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  registerForm: FormGroup;
  submitted = false;
  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
    this.user = {};

    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.registerForm.controls; }


  reset_pass() {
    this.router.navigate(['/reset']);
  }

  login() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.router.navigate(['/home']);


    this.loading = true;
    
  }
}


