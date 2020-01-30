import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private user = {}
  constructor(
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.signin(this.user).subscribe(
      res =>{
        localStorage.setItem('token',res.token);
        this.router.navigate(['/private']);
      },
      err => console.log(err)
    )
  }

}
