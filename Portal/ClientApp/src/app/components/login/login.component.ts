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
  displayModal  : boolean = false;


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
      let userForm: User;
      userForm = <User>this.registerForm.value;
      userForm.IsActive = false;
      userForm.IsNew = false;
      userForm.LastName = null;
      userForm.Name = null;
      userForm.IdUser = 1;

      let userLogin: User[] = [userForm];
      this.userService.login(
        userLogin,
        (resp: Models.Response<User>) => {
          if (resp.success) {

            if (resp.responseData[0] != undefined) {
              if (resp.responseData[0].isNew) {
                this.displayModal = true;
              }

              else {
                this.router.navigate(['/home']);
              }
            }
            else {
              this.messageService.add({ severity: 'Warning', summary: 'Warning', detail: 'Usuario y/o contraseña incorrecta' });
            }

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

  }
}


