import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, } from "@angular/router";
import { FormControl } from '@angular/forms';
import { User } from '../../models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { first } from 'rxjs/operators';
import { UserService } from '../../services/user/user.service';
import { MessageService } from 'primeng/api';

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
  userServ: User[];

  constructor(private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private userService: UserService) { }

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
    else {
      this.userService.get(
        (resp: Models.Response<User[]>) => {
          if (resp.success) {
            //resp.responseData.forEach(
            //  (role, index) => {
            //    role.Status = new Catalog();
            //    role.Status.id = role.statusId;
            //    role.Status.description = role.statusDescription;
            //  }
            //)
            //   this.userServ = resp.responseData;
            this.router.navigate(['/home']);
          }
          else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: resp.message });
          }
          this.loading = false;
        },
        (error: any) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: JSON.stringify(error, null, 4) });
          this.loading = false;
        }
      );

    }

    //this.loading = true;
    
  }
}


