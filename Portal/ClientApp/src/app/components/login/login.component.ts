import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, } from "@angular/router";
import { FormControl } from '@angular/forms';
import { User } from '../../models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { first } from 'rxjs/operators';
import { UserService } from '../../services/user/user.service';
import { MessageService } from 'primeng/api';
import { UpdateUser } from '../../models/EnumUpdate';


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
  displayModal: boolean = false;

  public sessionStorage = sessionStorage;
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

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.registerForm.controls; }


  reset_pass() {
    this.router.navigate(['/reset']);
  }

  login() {
    this.loading = true;
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    else {
      let userForm: User;
      userForm = <User>this.registerForm.value;

      let userLogin: User[] = [userForm];
      this.authenticationService.login(
        userLogin,
        (resp: Models.Response<User>) => {
          if (resp.success) {

            this.authenticationService.authorize(resp.responseData);

            if (this.sessionStorage) {
              let userSession: User;
              JSON.parse(this.sessionStorage.getItem('currentUser')).forEach(item => {
                userSession = item;
              });
              if (userSession.isNew) {
                this.displayModal = true;
              }

              else {
                this.router.navigate(['/home']);
              }
            }
            else {
              this.messageService.add({ severity: 'Warning', summary: 'Warning', detail: 'Usuario y/o contraseña incorrecta' });
              this.loading = false;
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

  change() {
    this.router.navigate(['/change']);
  }

  home() {
    let userForm: User;

    JSON.parse(this.sessionStorage.getItem('currentUser')).forEach(item => {
      userForm = item;
    });

    let userChange: User = userForm;
    this.userService.put(
      userChange, UpdateUser.UpdateIsNew,
      (response: Models.Response<number | null>) => {
        if (response.success) {
          this.router.navigate(['/home']);
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.message });
          this.loading = false;
        }
      },
      (error: any) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: JSON.stringify(error, null, 4) });
        this.loading = false;
      }
    );


  }
}


