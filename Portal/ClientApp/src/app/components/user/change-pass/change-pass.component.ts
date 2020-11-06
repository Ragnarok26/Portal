import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, } from "@angular/router";
import { UserService } from 'src/app/services/user/user.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { User } from 'src/app/models/User';
import { UpdateUser } from '../../../models/EnumUpdate';


@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']

})
export class ChangePassComponent {

  public sessionStorage = sessionStorage;
  formGroup: FormGroup | null = null;
  loading: boolean;
  userForChange: User;
  displayModal: boolean = false;


  constructor(private fb: FormBuilder,
    private userService: UserService,
    private messageService: MessageService,
    private router: Router,
    private confirmationService: ConfirmationService) {


    this.formGroup = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeat_password: ''
    });

    this.formGroup.get('repeat_password').setValidators(
      userService.equalsValidator(this.formGroup.get('password'))
    );
  }

  onSubmit(): void {
    let userForm: User;
    userForm = <User>this.formGroup.value;

    let session = new User();

    JSON.parse(this.sessionStorage.getItem('currentUser')).forEach(item => {
      session = item;
      session.password = userForm.password
    });

    let userChange: User = session;
    this.userService.put(
      userChange, UpdateUser.ChangePass,
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