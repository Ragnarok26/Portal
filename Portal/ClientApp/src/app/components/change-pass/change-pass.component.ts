import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { MessageService } from 'primeng/api';
import { User } from '../../models/User';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent {

  formGroup: FormGroup | null = null;
  loading: boolean;


  constructor(private fb: FormBuilder,
    private userService: UserService,
    private messageService: MessageService) {


    this.formGroup = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeat_password: ''
    });

    this.formGroup.get('repeat_password').setValidators(
      userService.equalsValidator(this.formGroup.get('password'))
    );
  }

  onSubmit(): void {
    const password = this.formGroup.get('password').value as string;

    let userForm: User;
    userForm = <User>this.formGroup.value;
    userForm.IsActive = false;
    userForm.IsNew = false;
    userForm.LastName = null;
    userForm.Name = null;
    userForm.IdUser = 1;

    //let user: User = [userForm];

    this.userService.update(
      userForm,
      (response: Models.Response<number | null>) => {
        if (response.success) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Tu contraseña ha sido enviada por correo.' });
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
}
