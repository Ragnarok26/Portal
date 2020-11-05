import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../models/User';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

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
    private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
    this.user = {};

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.registerForm.controls; }



  create() {
    this.loading = true;
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    else {
      let userForm: User;
      userForm = <User>this.registerForm.value;
      let usercreate: User = userForm;
      this.userService.post(
        usercreate,
        (resp: Models.Response<User>) => {
          if (resp.success) {

            if (resp.responseData[0] != undefined) {
              //this.sessionStorage.setItem("user", resp.responseData[0]);
              //this.userService.userSes = resp.responseData[0];
              //console.log(this.userService.userSes)

              if (resp.responseData[0].isNew) {
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
}
