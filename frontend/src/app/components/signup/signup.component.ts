import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  user = {
    user: '',
    password: '',
    confirmPass: ''
  };

  ngOnInit() {
  }
  cleanUser() {
    this.user.user = '';
    this.user.password = '';
    this.user.confirmPass = '';
  }
  onSubmit() {
    if (this.user.password != this.user.confirmPass) {
      alert('The passwords do not match');
      this.cleanUser();
    } else {
      this.authService.signup(this.user).subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/private']);
        },
        err => console.log(err)
      )
    }

  }

}
