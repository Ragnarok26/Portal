import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/User';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  loading: boolean;
  user: User[];
  displayModal: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService, private messageService: MessageService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    });
  }


  get f() { return this.registerForm.controls; }


  reset_pass() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let userForm: User;
    userForm = <User>this.registerForm.value;

    let userChange: User= userForm;
    this.user = this.registerForm.value;
    this.userService.put(
      userChange,
      (response: Models.Response<number | null>) => {
        if (response.success) {
          this.displayModal = true;
          this.loading = false;
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
  changeSuccess() {
    this.router.navigate(['/login']);
  }

}
