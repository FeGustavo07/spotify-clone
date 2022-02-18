import { Router } from '@angular/router';
import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private SpotifyService: SpotifyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkUrlTokenCallback()
  }

  checkUrlTokenCallback() {
    const token = this.SpotifyService.getUrlTokenCallback()
    if(!!token) {
      this.SpotifyService.setAccessToken(token)
      this.router.navigate(['/player'])
    }
  }

  openLoginPage() {
    window.location.href = this.SpotifyService.getUrlLogin()
  }

}
