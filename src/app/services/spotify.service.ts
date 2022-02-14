import { spotifyConfiguration } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { }

  getUrlLogin(): string {
    const authEndPoint = `${spotifyConfiguration.authEndPoint}?`
    const clientId = `client_id=${spotifyConfiguration.clientId}&`
    const redirectUrl = `redirect_uri=${spotifyConfiguration.redirectUrl}&`
    const scopes = `scopes=${spotifyConfiguration.scopes.join('%20')}&`
    const responseType = `response_type=token&show_dialog=true`
    return authEndPoint + clientId + redirectUrl + scopes + responseType
  }

}
