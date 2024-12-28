import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LoginService } from './services/login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: [
    trigger('textChange', [
      state('login', style({ opacity: 1 })),
      state('register', style({ opacity: 1 })),
      transition('login <=> register', [
        style({ opacity: 0 }),
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class LoginComponent {
  form: FormGroup;
  isRegister = false;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      name: [],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const { email, password, name } = this.form.value;
      if (this.isRegister) {
        // Use o serviço para registrar
        this.loginService.register(email, password, name).subscribe(response => {
          console.log('Usuário registrado:', response);
        });
      } else {
        // Use o serviço para logar
        this.loginService.login(email, password).subscribe(response => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home']);
        });
      }
    }
  }

  toggleMode() {
    this.isRegister = !this.isRegister;
    this.form.reset(); // Limpa o formulário ao trocar de modo
  }
}
