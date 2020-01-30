import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AuthGuard } from 'src/app/guards/auth.guard';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
